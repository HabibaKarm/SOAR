import { useState } from "react";
import { Shield, Search, Plus, Globe, AlertTriangle, Clock, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const ipData = [
  {
    ip: "203.45.67.89",
    country: "CN",
    threatSource: "Brute Force Attack",
    reputation: 15,
    firstSeen: "2 hours ago",
    lastActivity: "5 min ago",
    status: "Blocked",
    incidents: 45
  },
  {
    ip: "192.168.45.12", 
    country: "RU",
    threatSource: "Malware C&C",
    reputation: 5,
    firstSeen: "1 day ago",
    lastActivity: "12 min ago",
    status: "Blocked",
    incidents: 23
  },
  {
    ip: "10.34.56.78",
    country: "US",
    threatSource: "Phishing Campaign",
    reputation: 25,
    firstSeen: "3 hours ago", 
    lastActivity: "1 hour ago",
    status: "Monitored",
    incidents: 12
  },
  {
    ip: "185.234.12.45",
    country: "NL",
    threatSource: "DDoS Botnet",
    reputation: 8,
    firstSeen: "5 hours ago",
    lastActivity: "30 min ago", 
    status: "Blocked",
    incidents: 78
  },
  {
    ip: "94.102.49.190",
    country: "DE",
    threatSource: "Spam Operations",
    reputation: 35,
    firstSeen: "12 hours ago",
    lastActivity: "2 hours ago",
    status: "Warning",
    incidents: 8
  }
];

export default function MaliciousIPs() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIPs = ipData.filter(ip => 
    ip.ip.includes(searchTerm) || 
    ip.threatSource.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getReputationColor = (reputation: number) => {
    if (reputation <= 10) return "text-destructive";
    if (reputation <= 30) return "text-warning";
    return "text-muted-foreground";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Blocked":
        return <Badge variant="destructive">{status}</Badge>;
      case "Warning":
        return <Badge variant="secondary" className="bg-warning/10 text-warning">{status}</Badge>;
      case "Monitored":
        return <Badge variant="outline">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getThreatIcon = (threatSource: string) => {
    if (threatSource.includes("Brute Force")) return <Shield className="h-4 w-4 text-destructive" />;
    if (threatSource.includes("Malware")) return <AlertTriangle className="h-4 w-4 text-destructive" />;
    if (threatSource.includes("Phishing")) return <Globe className="h-4 w-4 text-warning" />;
    return <Ban className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold  ">
          Malicious IP Management
        </h1>
        <p className="text-muted-foreground">
          Monitor and block malicious IP addresses with real-time threat intelligence
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-cyber border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-destructive" />
              <span className="text-sm font-medium">Blocked Today</span>
            </div>
            <div className="text-2xl font-bold text-destructive mt-2">342</div>
            <p className="text-xs text-muted-foreground mt-1">+23% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="shadow-cyber border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span className="text-sm font-medium">Under Watch</span>
            </div>
            <div className="text-2xl font-bold text-warning mt-2">89</div>
            <p className="text-xs text-muted-foreground mt-1">Monitoring suspicious activity</p>
          </CardContent>
        </Card>

        <Card className="shadow-cyber border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Response Time</span>
            </div>
            <div className="text-2xl font-bold text-primary mt-2">1.2s</div>
            <p className="text-xs text-muted-foreground mt-1">Average blocking time</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-cyber border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-primary" />
            <span>Threat Intelligence Feed</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by IP address or threat type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="gradient-primary text-primary-foreground">
              <Plus className="h-4 w-4 mr-2" />
              Add IP Manually
            </Button>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>IP Address</TableHead>
                  <TableHead>Threat Source</TableHead>
                  <TableHead>Reputation</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Activity</TableHead>
                  <TableHead>Incidents</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredIPs.map((ip, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm">{ip.ip}</span>
                        <Badge variant="outline" className="text-xs">
                          {ip.country}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getThreatIcon(ip.threatSource)}
                        <span className="text-sm">{ip.threatSource}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-medium ${getReputationColor(ip.reputation)}`}>
                            {ip.reputation}/100
                          </span>
                        </div>
                        <Progress 
                          value={ip.reputation} 
                          className="h-1 w-16"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(ip.status)}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {ip.lastActivity}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {ip.incidents}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Showing {filteredIPs.length} malicious IPs</span>
            <div className="flex items-center space-x-2">
              <span>Threat Intel: </span>
              <Badge variant="secondary" className="text-xs">
                AbuseIPDB
              </Badge>
              <Badge variant="secondary" className="text-xs">
                AlienVault OTX
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}