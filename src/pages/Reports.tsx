import { BarChart3, TrendingUp, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold  ">
          Reports & Analytics
        </h1>
        <p className="text-muted-foreground">
          Security metrics, performance analytics, and compliance reports
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-cyber border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Threat Detection</span>
            </CardTitle>
            <CardDescription>AI model performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Detection Accuracy</span>
                <span className="font-bold text-success">94.7%</span>
              </div>
              <div className="flex justify-between">
                <span>False Positives</span>
                <span className="font-bold">2.1%</span>
              </div>
              <div className="flex justify-between">
                <span>Processing Speed</span>
                <span className="font-bold text-primary">1.2s avg</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-cyber border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Response Metrics</span>
            </CardTitle>
            <CardDescription>Incident response performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Avg Response Time</span>
                <span className="font-bold text-success">4.2 min</span>
              </div>
              <div className="flex justify-between">
                <span>Incidents Resolved</span>
                <span className="font-bold">127</span>
              </div>
              <div className="flex justify-between">
                <span>Auto-Resolution</span>
                <span className="font-bold text-primary">78%</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-cyber border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Monthly Summary</span>
            </CardTitle>
            <CardDescription>January 2024 overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Threats Blocked</span>
                <span className="font-bold text-destructive">2,847</span>
              </div>
              <div className="flex justify-between">
                <span>Emails Analyzed</span>
                <span className="font-bold">34,521</span>
              </div>
              <div className="flex justify-between">
                <span>IPs Blacklisted</span>
                <span className="font-bold">456</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-cyber border-primary/20">
        <CardHeader>
          <CardTitle>Advanced Analytics</CardTitle>
          <CardDescription>
            Comprehensive security analytics and trend analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 bg-muted/20 rounded-lg">
            <div className="text-center space-y-2">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">
                Advanced charts and analytics will be available with backend integration
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}