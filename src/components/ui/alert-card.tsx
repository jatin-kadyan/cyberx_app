import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { Button } from "./button";
import { Heart, MessageCircle, Share2, Shield, AlertTriangle, Info } from "lucide-react";

const alertCardVariants = cva(
  "relative overflow-hidden rounded-lg border bg-gradient-card p-6 shadow-cyber transition-all duration-300 hover:shadow-glow-primary",
  {
    variants: {
      severity: {
        critical: "border-destructive/50 bg-gradient-to-br from-destructive/5 to-background",
        warning: "border-warning/50 bg-gradient-to-br from-warning/5 to-background",
        info: "border-primary/50 bg-gradient-to-br from-primary/5 to-background",
      },
    },
    defaultVariants: {
      severity: "info",
    },
  }
);

interface AlertCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertCardVariants> {
  title: string;
  content: string;
  timestamp: string;
  authority: string;
  verified?: boolean;
  likes?: number;
  comments?: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

const AlertCard = React.forwardRef<HTMLDivElement, AlertCardProps>(
  ({ 
    className, 
    severity, 
    title, 
    content, 
    timestamp, 
    authority, 
    verified = true,
    likes = 0,
    comments = 0,
    onLike,
    onComment,
    onShare,
    ...props 
  }, ref) => {
    const getSeverityIcon = () => {
      switch (severity) {
        case "critical":
          return <AlertTriangle className="h-5 w-5 text-destructive" />;
        case "warning":
          return <AlertTriangle className="h-5 w-5 text-warning" />;
        default:
          return <Info className="h-5 w-5 text-primary" />;
      }
    };

    return (
      <div className={cn(alertCardVariants({ severity }), className)} ref={ref} {...props}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {getSeverityIcon()}
            <div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-muted-foreground">{authority}</span>
                {verified && (
                  <Badge variant="secondary" className="gap-1 text-xs">
                    <Shield className="h-3 w-3" />
                    Verified
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>

        {/* Content */}
        <p className="text-sm text-foreground/90 mb-4 leading-relaxed">{content}</p>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLike}
              className="gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Heart className="h-4 w-4" />
              {likes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onComment}
              className="gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              {comments}
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onShare}
            className="gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
    );
  }
);

AlertCard.displayName = "AlertCard";

export { AlertCard, alertCardVariants };