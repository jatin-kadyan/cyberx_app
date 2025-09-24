import { useState } from "react";
import { AlertCard } from "@/components/ui/alert-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Filter } from "lucide-react";

// Mock data for demonstration
const mockAlerts = [
  {
    id: 1,
    title: "New WhatsApp Scam Targeting Bank Details",
    content: "Cybercriminals are impersonating bank officials through WhatsApp messages, requesting account details for 'security updates'. Never share banking information through messaging apps. Contact your bank directly using official channels.",
    timestamp: "2 hours ago",
    authority: "CERT-In",
    severity: "critical" as const,
    verified: true,
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    title: "Microsoft Office Security Update Available",
    content: "Microsoft has released critical security patches for Office applications. Update immediately to protect against newly discovered vulnerabilities that could allow remote code execution.",
    timestamp: "5 hours ago",
    authority: "Microsoft Security Team",
    severity: "warning" as const,
    verified: true,
    likes: 156,
    comments: 23,
  },
  {
    id: 3,
    title: "Safe Online Shopping Tips for Festival Season",
    content: "With the festive season approaching, here are essential tips to shop safely online: verify website authenticity, use secure payment methods, check for HTTPS, and avoid public WiFi for transactions.",
    timestamp: "8 hours ago",
    authority: "CyberX Security Team",
    severity: "info" as const,
    verified: true,
    likes: 89,
    comments: 12,
  },
  {
    id: 4,
    title: "Urgent: Chrome Browser Vulnerability Patched",
    content: "Google has fixed a zero-day vulnerability in Chrome browser (version 119.0.6045.199). Users should update immediately as this flaw was being actively exploited by threat actors.",
    timestamp: "12 hours ago",
    authority: "Google Security Team",
    severity: "critical" as const,
    verified: true,
    likes: 445,
    comments: 78,
  },
  {
    id: 5,
    title: "Email Security: Recognizing Business Email Compromise",
    content: "BEC attacks have increased by 65% this quarter. Learn to identify suspicious email patterns, verify sender authenticity, and implement proper email security protocols in your organization.",
    timestamp: "1 day ago",
    authority: "FBI Cyber Division",
    severity: "warning" as const,
    verified: true,
    likes: 203,
    comments: 34,
  },
];

export function AlertsFeed() {
  const [alerts, setAlerts] = useState(mockAlerts);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
    // In a real app, this would fetch new alerts
  };

  const handleLike = (alertId: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId 
        ? { ...alert, likes: alert.likes + 1 }
        : alert
    ));
  };

  const handleComment = (alertId: number) => {
    // In a real app, this would open a comment modal
    console.log(`Opening comments for alert ${alertId}`);
  };

  const handleShare = (alertId: number) => {
    // In a real app, this would open share options
    console.log(`Sharing alert ${alertId}`);
  };

  const filteredAlerts = alerts.filter(alert => {
    if (selectedFilter === "all") return true;
    return alert.severity === selectedFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Security Alerts</h2>
          <p className="text-muted-foreground">Stay informed with the latest cybersecurity updates</p>
        </div>
        <Button
          onClick={handleRefresh}
          disabled={isRefreshing}
          variant="outline"
          className="gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <div className="flex gap-2">
          {["all", "critical", "warning", "info"].map((filter) => (
            <Badge
              key={filter}
              variant={selectedFilter === filter ? "default" : "secondary"}
              className="cursor-pointer capitalize"
              onClick={() => setSelectedFilter(filter)}
            >
              {filter === "all" ? "All Alerts" : filter}
            </Badge>
          ))}
        </div>
      </div>

      {/* Alerts Feed */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <AlertCard
            key={alert.id}
            title={alert.title}
            content={alert.content}
            timestamp={alert.timestamp}
            authority={alert.authority}
            severity={alert.severity}
            verified={alert.verified}
            likes={alert.likes}
            comments={alert.comments}
            onLike={() => handleLike(alert.id)}
            onComment={() => handleComment(alert.id)}
            onShare={() => handleShare(alert.id)}
          />
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No alerts found for the selected filter.</p>
        </div>
      )}
    </div>
  );
}