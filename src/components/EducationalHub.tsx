import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  Smartphone, 
  CreditCard, 
  Mail,
  ExternalLink,
  Clock,
  BookOpen
} from "lucide-react";

const educationalContent = [
  {
    id: 1,
    title: "Password Security Best Practices",
    description: "Learn how to create strong, unique passwords and use password managers effectively.",
    category: "Authentication",
    icon: Lock,
    readTime: "5 min read",
    difficulty: "Beginner",
    topics: ["Strong Passwords", "Password Managers", "Two-Factor Authentication"],
  },
  {
    id: 2,
    title: "Recognizing Phishing Attacks",
    description: "Identify common phishing tactics and protect yourself from email and SMS scams.",
    category: "Awareness",
    icon: Mail,
    readTime: "7 min read",
    difficulty: "Beginner",
    topics: ["Email Security", "Social Engineering", "Verification Methods"],
  },
  {
    id: 3,
    title: "Mobile Device Security",
    description: "Secure your smartphone and tablet with proper settings and safe app practices.",
    category: "Mobile",
    icon: Smartphone,
    readTime: "6 min read",
    difficulty: "Intermediate",
    topics: ["App Permissions", "Public WiFi", "Device Encryption"],
  },
  {
    id: 4,
    title: "Online Financial Safety",
    description: "Protect your financial information when banking and shopping online.",
    category: "Finance",
    icon: CreditCard,
    readTime: "8 min read",
    difficulty: "Intermediate",
    topics: ["Secure Banking", "Payment Protection", "Credit Monitoring"],
  },
  {
    id: 5,
    title: "Privacy Protection Guide",
    description: "Control your digital footprint and protect personal information online.",
    category: "Privacy",
    icon: Eye,
    readTime: "10 min read",
    difficulty: "Advanced",
    topics: ["Data Protection", "Social Media Privacy", "VPN Usage"],
  },
  {
    id: 6,
    title: "Incident Response Planning",
    description: "What to do when you've been compromised - step-by-step recovery guide.",
    category: "Response",
    icon: Shield,
    readTime: "12 min read",
    difficulty: "Advanced",
    topics: ["Breach Response", "Account Recovery", "Legal Reporting"],
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-success/10 text-success border-success/20";
    case "Intermediate":
      return "bg-warning/10 text-warning border-warning/20";
    case "Advanced":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

export function EducationalHub() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Cybersecurity Education Hub</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Build your cyber defense knowledge with expert-verified guides and best practices
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {educationalContent.map((content) => {
          const IconComponent = content.icon;
          return (
            <Card
              key={content.id}
              className="bg-gradient-card border-primary/20 hover:shadow-glow-primary transition-all duration-300 cursor-pointer group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {content.category}
                    </Badge>
                  </div>
                  <Badge className={getDifficultyColor(content.difficulty)}>
                    {content.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {content.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {content.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {content.topics.length} topics
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {content.topics.slice(0, 2).map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {content.topics.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{content.topics.length - 2} more
                    </Badge>
                  )}
                </div>

                <Button className="w-full gap-2 bg-gradient-cyber hover:opacity-90">
                  <BookOpen className="h-4 w-4" />
                  Start Learning
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}