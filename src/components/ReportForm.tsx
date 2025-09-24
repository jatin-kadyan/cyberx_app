import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Upload, FileText, Image, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ReportForm() {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
    evidence: null as File | null,
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.type || !formData.title || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate report submission
    toast({
      title: "Report Submitted Successfully",
      description: "Your report has been submitted to our security team for review.",
    });

    // Reset form
    setFormData({
      type: "",
      title: "",
      description: "",
      evidence: null,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, evidence: file });
    }
  };

  return (
    <Card className="bg-gradient-card border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <AlertTriangle className="h-5 w-5" />
          Report Cyber Incident
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="incident-type">Incident Type *</Label>
            <Select
              value={formData.type}
              onValueChange={(value) => setFormData({ ...formData, type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select incident type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phishing">Phishing Email/SMS</SelectItem>
                <SelectItem value="scam">Online Scam</SelectItem>
                <SelectItem value="fraud">Financial Fraud</SelectItem>
                <SelectItem value="malware">Malware/Virus</SelectItem>
                <SelectItem value="identity-theft">Identity Theft</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Incident Title *</Label>
            <Input
              id="title"
              placeholder="Brief description of the incident"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Detailed Description *</Label>
            <Textarea
              id="description"
              placeholder="Provide detailed information about the incident, including when it happened, what occurred, and any other relevant details..."
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="evidence">Upload Evidence (Optional)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="evidence"
                type="file"
                accept="image/*,.pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('evidence')?.click()}
                className="gap-2"
              >
                <Upload className="h-4 w-4" />
                {formData.evidence ? formData.evidence.name : "Choose File"}
              </Button>
              {formData.evidence && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  {formData.evidence.type.startsWith('image/') ? (
                    <Image className="h-4 w-4" />
                  ) : (
                    <FileText className="h-4 w-4" />
                  )}
                  {(formData.evidence.size / 1024 / 1024).toFixed(2)} MB
                </div>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Supported formats: Images (JPG, PNG), PDF, DOC, TXT. Max size: 10MB
            </p>
          </div>

          <Button type="submit" className="w-full bg-gradient-cyber hover:opacity-90">
            Submit Report
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}