import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertsFeed } from "@/components/AlertsFeed";
import { ReportForm } from "@/components/ReportForm";
import { EducationalHub } from "@/components/EducationalHub";
import { 
  Shield, 
  AlertTriangle, 
  BookOpen, 
  MessageSquare, 
  Bell,
  Menu,
  User
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("alerts");

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-cyber">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CyberX</h1>
                <p className="text-xs text-muted-foreground">Cybersecurity Awareness Platform</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="gap-2">
                <Bell className="h-4 w-4" />
                <Badge variant="destructive" className="ml-1">3</Badge>
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[600px] mx-auto">
            <TabsTrigger value="alerts" className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Security Alerts</span>
              <span className="sm:hidden">Alerts</span>
            </TabsTrigger>
            <TabsTrigger value="report" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Report Incident</span>
              <span className="sm:hidden">Report</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Learn</span>
              <span className="sm:hidden">Learn</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-6">
            <AlertsFeed />
          </TabsContent>

          <TabsContent value="report" className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center space-y-2 mb-8">
                <h2 className="text-2xl font-bold text-foreground">Report a Cyber Incident</h2>
                <p className="text-muted-foreground">
                  Help protect the community by reporting suspicious activities and cyber threats
                </p>
              </div>
              <ReportForm />
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <EducationalHub />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">CyberX Platform</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Empowering users with trusted cybersecurity awareness and incident reporting. 
              Authority-verified content for reliable cyber defense.
            </p>
            <div className="flex justify-center gap-4 text-xs text-muted-foreground">
              <span>© 2024 CyberX Team</span>
              <span>•</span>
              <span>Powered by Verified Authorities</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
