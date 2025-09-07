import { useState } from "react";
import { FileText, Search, Plus, User, Calendar, AlertCircle, CheckCircle, Clock } from "lucide-react";
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

const incidentData = [
  {
    id: "INC-2024-001",
    title: "Suspected Phishing Campaign Targeting Finance Team",
    type: "Phishing",
    priority: "High",
    status: "Open",
    assignee: "Sarah Chen",
    created: "2024-01-15 09:30",
    lastUpdated: "2024-01-15 14:22",
    description: "Multiple phishing emails detected targeting finance department with fake invoice attachments"
  },
  {
    id: "INC-2024-002", 
    title: "Malware C&C Communication Detected",
    type: "Malware",
    priority: "Critical",
    status: "In Progress",
    assignee: "Mike Rodriguez",
    created: "2024-01-15 08:15",
    lastUpdated: "2024-01-15 13:45",
    description: "Endpoint detected communicating with known malware command & control server"
  },
  {
    id: "INC-2024-003",
    title: "Brute Force Attack on SSH Services",
    type: "Network Attack",
    priority: "Medium",
    status: "Resolved",
    assignee: "Alex Thompson",
    created: "2024-01-14 22:30",
    lastUpdated: "2024-01-15 10:15",
    description: "Multiple failed SSH login attempts detected from suspicious IP addresses"
  },
  {
    id: "INC-2024-004",
    title: "Suspicious File Upload Activity",
    type: "Data Exfiltration",
    priority: "High", 
    status: "Open",
    assignee: "Lisa Wang",
    created: "2024-01-15 11:45",
    lastUpdated: "2024-01-15 12:30",
    description: "Unusual large file upload patterns detected in cloud storage systems"
  },
  {
    id: "INC-2024-005",
    title: "Unauthorized Access Attempt",
    type: "Access Control",
    priority: "Medium",
    status: "In Progress",
    assignee: "David Kumar",
    created: "2024-01-15 07:20",
    lastUpdated: "2024-01-15 14:10",
    description: "Multiple failed login attempts on admin accounts from different geographic locations"
  }
];

export default function Incidents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filteredIncidents = incidentData.filter(incident => {
    const matchesSearch = incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incident.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incident.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || incident.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || incident.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "In Progress":
        return <Clock className="h-4 w-4 text-warning" />;
      case "Resolved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      default:
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Open":
        return <Badge variant="destructive">{status}</Badge>;
      case "In Progress":
        return <Badge variant="secondary" className="bg-warning/10 text-warning">{status}</Badge>;
      case "Resolved":
        return <Badge variant="secondary" className="bg-success/10 text-success">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <Badge variant="destructive" className="gradient-threat">{priority}</Badge>;
      case "High":
        return <Badge variant="destructive">{priority}</Badge>;
      case "Medium":
        return <Badge variant="secondary" className="bg-warning/10 text-warning">{priority}</Badge>;
      case "Low":
        return <Badge variant="outline">{priority}</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const stats = {
    total: incidentData.length,
    open: incidentData.filter(i => i.status === "Open").length,
    inProgress: incidentData.filter(i => i.status === "In Progress").length,
    resolved: incidentData.filter(i => i.status === "Resolved").length
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold  ">
          Incident Management
        </h1>
        <p className="text-muted-foreground">
          Track, assign, and resolve security incidents efficiently
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="shadow-cyber border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Total</span>
            </div>
            <div className="text-2xl font-bold text-primary mt-2">{stats.total}</div>
          </CardContent>
        </Card>

        <Card className="shadow-cyber border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <span className="text-sm font-medium">Open</span>
            </div>
            <div className="text-2xl font-bold text-destructive mt-2">{stats.open}</div>
          </CardContent>
        </Card>

        <Card className="shadow-cyber border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-warning" />
              <span className="text-sm font-medium">In Progress</span>
            </div>
            <div className="text-2xl font-bold text-warning mt-2">{stats.inProgress}</div>
          </CardContent>
        </Card>

        <Card className="shadow-cyber border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">Resolved</span>
            </div>
            <div className="text-2xl font-bold text-success mt-2">{stats.resolved}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-cyber border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary" />
            <span>Security Incidents</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search incidents by ID, title, or assignee..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Button className="gradient-primary text-primary-foreground">
              <Plus className="h-4 w-4 mr-2" />
              New Incident
            </Button>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Incident ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredIncidents.map((incident) => (
                  <TableRow key={incident.id} className="hover:bg-muted/30 cursor-pointer">
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(incident.status)}
                        <span className="font-mono text-sm">{incident.id}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{incident.title}</div>
                        <div className="text-xs text-muted-foreground">
                          Type: {incident.type}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getPriorityBadge(incident.priority)}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(incident.status)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{incident.assignee}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{incident.created}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Showing {filteredIncidents.length} of {incidentData.length} incidents</span>
            <div className="flex items-center space-x-2">
              <span>Average Resolution Time: 2.4 hours</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}