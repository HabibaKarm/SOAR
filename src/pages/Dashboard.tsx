import { Mail, Shield, AlertTriangle, CheckCircle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const EmailCard = () => (
  <Card className="shadow-cyber border-primary/20">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Mail className="h-5 w-5 text-primary" />
        <span>Email Analysis</span>
      </CardTitle>
      <CardDescription>Phishing detection summary</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Today's Analysis</span>
        <span className="text-2xl font-bold text-primary">1,247</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span className="text-sm">Legitimate</span>
          </span>
          <span className="font-semibold">1,189</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center space-x-2">
            <XCircle className="h-4 w-4 text-destructive" />
            <span className="text-sm">Phishing</span>
          </span>
          <span className="font-semibold">58</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Detection Accuracy</span>
          <span>94.7%</span>
        </div>
        <Progress value={94.7} className="h-2" />
      </div>
    </CardContent>
  </Card>
);

const IPCard = () => (
  <Card className="shadow-cyber border-primary/20">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Shield className="h-5 w-5 text-primary" />
        <span>IP Blocking</span>
      </CardTitle>
      <CardDescription>Malicious IP activity</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">IPs Blocked Today</span>
        <span className="text-2xl font-bold text-destructive">342</span>
      </div>
      
      <div className="space-y-2">
        {[
          { ip: "203.45.67.89", source: "Brute Force", threat: "High" },
          { ip: "192.168.45.12", source: "Malware C&C", threat: "Critical" },
          { ip: "10.0.34.56", source: "Phishing", threat: "Medium" }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded bg-muted/50">
            <div className="space-y-1">
              <div className="font-mono text-sm">{item.ip}</div>
              <div className="text-xs text-muted-foreground">{item.source}</div>
            </div>
            <Badge 
              variant={item.threat === "Critical" ? "destructive" : 
                     item.threat === "High" ? "destructive" : "secondary"}
              className="text-xs"
            >
              {item.threat}
            </Badge>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const IncidentsCard = () => (
  <Card className="shadow-cyber border-primary/20">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <AlertTriangle className="h-5 w-5 text-primary" />
        <span>Active Incidents</span>
      </CardTitle>
      <CardDescription>Current security incidents</CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      {[
        { id: "INC-2024-001", type: "Phishing", status: "Open", priority: "High" },
        { id: "INC-2024-002", type: "Malware", status: "In Progress", priority: "Critical" },
        { id: "INC-2024-003", type: "DDoS", status: "Resolved", priority: "Medium" }
      ].map((incident) => (
        <div key={incident.id} className="flex items-center justify-between p-3 rounded bg-muted/50">
          <div className="space-y-1">
            <div className="font-semibold text-sm">{incident.id}</div>
            <div className="text-xs text-muted-foreground">{incident.type}</div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge 
              variant={incident.priority === "Critical" ? "destructive" : 
                     incident.priority === "High" ? "destructive" : "secondary"}
              className="text-xs"
            >
              {incident.priority}
            </Badge>
            <Badge 
              variant={incident.status === "Resolved" ? "secondary" : "outline"}
              className="text-xs"
            >
              {incident.status}
            </Badge>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

const AlertsCard = () => (
  <Card className="shadow-cyber border-primary/20">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Clock className="h-5 w-5 text-primary" />
        <span>Recent Alerts</span>
      </CardTitle>
      <CardDescription>System notifications</CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      {[
        { message: "IP 192.168.1.45 blocked automatically", time: "2 min ago", type: "success" },
        { message: "Phishing email quarantined", time: "5 min ago", type: "warning" },
        { message: "New malware signature detected", time: "12 min ago", type: "destructive" }
      ].map((alert, i) => (
        <div key={i} className="flex items-start space-x-3 p-2 rounded bg-muted/50">
          <div className={`h-2 w-2 rounded-full mt-2 ${
            alert.type === 'success' ? 'bg-success' : 
            alert.type === 'warning' ? 'bg-warning' : 
            'bg-destructive'
          }`} />
          <div className="flex-1 space-y-1">
            <div className="text-sm">{alert.message}</div>
            <div className="text-xs text-muted-foreground">{alert.time}</div>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          Security Operations Dashboard
        </h1>
        <p className="text-muted-foreground">
          Monitor threats, incidents, and security metrics in real-time
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <EmailCard />
        </div>
        <div className="lg:col-span-2">
          <IPCard />
        </div>
        <div className="lg:col-span-2">
          <IncidentsCard />
        </div>
        <div className="lg:col-span-2">
          <AlertsCard />
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button className="gradient-primary text-primary-foreground shadow-cyber">
          View Detailed Reports
        </Button>
      </div>
    </div>
  );
}