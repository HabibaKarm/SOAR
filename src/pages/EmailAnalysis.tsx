import { useState } from "react";
import { Mail, Search, Filter, Eye, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const emailData = [
  {
    id: "E001",
    sender: "security@bank.com",
    subject: "Account Verification Required",
    classification: "Phishing",
    confidence: 94.5,
    action: "Quarantined",
    time: "10:30 AM",
    status: "blocked"
  },
  {
    id: "E002", 
    sender: "noreply@company.com",
    subject: "Weekly Security Report",
    classification: "Legitimate",
    confidence: 98.2,
    action: "Released",
    time: "10:15 AM",
    status: "safe"
  },
  {
    id: "E003",
    sender: "admin@suspicious-domain.tk",
    subject: "Urgent: Update Your Password",
    classification: "Phishing",
    confidence: 89.7,
    action: "Quarantined",
    time: "09:45 AM",
    status: "blocked"
  },
  {
    id: "E004",
    sender: "hr@company.com",
    subject: "Employee Benefits Update",
    classification: "Legitimate",
    confidence: 96.8,
    action: "Released", 
    time: "09:30 AM",
    status: "safe"
  },
  {
    id: "E005",
    sender: "info@phishing-site.com",
    subject: "You've Won $1000000!",
    classification: "Phishing",
    confidence: 99.1,
    action: "Blocked",
    time: "09:15 AM",
    status: "blocked"
  }
];

export default function EmailAnalysis() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredEmails = emailData.filter(email => {
    const matchesSearch = email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         email.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || 
                         (filterStatus === "phishing" && email.classification === "Phishing") ||
                         (filterStatus === "legitimate" && email.classification === "Legitimate");
    return matchesSearch && matchesFilter;
  });

  const getClassificationIcon = (classification: string) => {
    if (classification === "Phishing") {
      return <AlertTriangle className="h-4 w-4 text-destructive" />;
    }
    return <CheckCircle className="h-4 w-4 text-success" />;
  };

  const getClassificationBadge = (classification: string, confidence: number) => {
    const variant = classification === "Phishing" ? "destructive" : "secondary";
    return (
      <div className="flex items-center space-x-2">
        <Badge variant={variant} className="text-xs">
          {classification}
        </Badge>
        <span className="text-xs text-muted-foreground">
          {confidence.toFixed(1)}%
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold  ">
          Email Analysis
        </h1>
        <p className="text-muted-foreground">
          AI-powered phishing detection and email security analysis
        </p>
      </div>

      <Card className="shadow-cyber border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-primary" />
            <span>Email Security Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search emails by sender or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Emails</SelectItem>
                <SelectItem value="phishing">Phishing</SelectItem>
                <SelectItem value="legitimate">Legitimate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Sender</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Classification</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmails.map((email) => (
                  <TableRow key={email.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        {getClassificationIcon(email.classification)}
                        <span className="font-mono text-sm">{email.sender}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs truncate">{email.subject}</div>
                    </TableCell>
                    <TableCell>
                      {getClassificationBadge(email.classification, email.confidence)}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={email.status === "blocked" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {email.action}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {email.time}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Shield className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Showing {filteredEmails.length} of {emailData.length} emails</span>
            <div className="flex items-center space-x-2">
              <span>AI Model Accuracy: 94.7%</span>
              <Badge variant="secondary" className="text-xs">
                Active
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}