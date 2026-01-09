import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Code2, Target, Users, Clock, Wrench } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// Import project images
import ecommerceDesktop from "@/assets/case_studies_imgs/E-commerce_Platform3.png";
import ecommercePlatform2 from "@/assets/case_studies_imgs/E-commerce_Platform4.png";
import dashboardDesktop1 from "@/assets/case_studies_imgs/dashboard-desktop1.jpeg";
import dashboardDesktop2 from "@/assets/case_studies_imgs/dashboard-desktop2.jpeg";
import project3Image from "@/assets/case_studies_imgs/project3-image.png"

interface CaseStudy {
  id: string;
  title: string;
  type: string;
  industry: string;
  goal: string;
  context: string;
  role: string;
  constraints: string[];
  challenges: string[];
  process: string[];
  techStack: string[];
  keyDecisions: string[];
  result: {
    metric: string;
    outcome: string;
  };
  feedback?: string;
  images?: string[]; // URLs for screenshots or GIFs
  links: {
    live?: string;
    source?: string;
  };
}

const CaseStudies = () => {
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform Optimization",
      type: "Full-Stack Application",
      industry: "Retail",
      context: "The client’s high-traffic online store had slow load times and low mobile conversions.",
      goal: "Increase checkout conversion and improve page load performance.",
      role: "Frontend Developer – performance optimization and UI implementation",
      constraints: [
        "3-month delivery window",
        "Maintain existing features",
        "SEO compliance"
      ],
      challenges: [
        "Optimizing images without breaking layout",
        "Refactoring legacy components under tight deadlines"
      ],
      process: [
        "Analyzed performance bottlenecks using Lighthouse and WebPageTest",
        "Implemented code splitting and lazy loading",
        "Optimized images with WebP and responsive sizing",
        "Refactored component architecture for reuse and speed"
      ],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Node.js"],
      keyDecisions: [
        "Switched to Next.js for server-side rendering and faster load",
        "Used React Query for efficient API fetching",
        "Implemented progressive image loading for mobile"
      ],
      result: {
        metric: "40% faster load times",
        outcome: "Checkout conversion increased by 22%; bounce rate dropped 15%"
      },
      feedback: "Client reported smoother checkout and higher repeat orders",
      images: [ecommerceDesktop, ecommercePlatform2],
      links: {
        live: "https://example-ecommerce.com",
        source: "https://github.com/example/ecommerce-platform"
      }
    },
    {
      id: "dashboard-analytics",
      title: "Analytics Dashboard",
      type: "Data Visualization",
      industry: "SaaS",
      context: "Business intelligence team required real-time dashboards to monitor KPIs efficiently.",
      goal: "Create responsive, interactive dashboards with real-time data updates.",
      role: "Frontend Developer – UI/UX and real-time data integration",
      constraints: [
        "Must handle large datasets",
        "Fully responsive across devices",
        "Accessibility (WCAG 2.1 AA) compliance"
      ],
      challenges: [
        "Rendering large datasets without lag",
        "Maintaining real-time updates without overloading the browser"
      ],
      process: [
        "Designed reusable chart components with Recharts",
        "Implemented virtualized lists for large tables",
        "Integrated WebSocket API for live updates",
        "Tested responsiveness across devices"
      ],
      techStack: ["React", "TypeScript", "D3.js", "Recharts", "Tailwind CSS", "Redux", "WebSocket"],
      keyDecisions: [
        "Chose Recharts for fast rendering and customization",
        "Used virtualization to improve performance on large datasets",
        "Implemented throttled WebSocket updates"
      ],
      result: {
        metric: "99.9% uptime",
        outcome: "Reduced task completion time by 35%; improved dashboard load speed by 60%"
      },
      feedback: "Users reported faster insights and easier KPI tracking",
      images: [dashboardDesktop1, dashboardDesktop2],
      links: {
        live: "https://example-analytics.com",
        source: "https://github.com/example/analytics-dashboard"
      }
    }
  ];

  const toggleCaseStudy = (id: string) => {
    setExpandedCaseStudy(expandedCaseStudy === id ? null : id);
  };

  const renderSummaryView = (caseStudy: CaseStudy) => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-2">
        <Badge variant="secondary">{caseStudy.type}</Badge>
        <Badge variant="outline">{caseStudy.industry}</Badge>
      </div>
      
      <h3 className="text-xl font-bold text-foreground">{caseStudy.title}</h3>
      <p className="text-muted-foreground font-medium">Role: {caseStudy.role}</p>
      <p className="text-muted-foreground">{caseStudy.goal}</p>
      
      <div className="flex flex-wrap gap-4 pt-2">
        {caseStudy.links.live && (
          <Button variant="outline" size="sm" asChild>
            <a href={caseStudy.links.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
        {caseStudy.links.source && (
          <Button variant="outline" size="sm" asChild>
            <a href={caseStudy.links.source} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Source Code
            </a>
          </Button>
        )}
        <Button variant="outline" size="sm" onClick={() => toggleCaseStudy(caseStudy.id)}>
          <ArrowRight className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </div>
    </div>
  );

  const renderDetailedView = (caseStudy: CaseStudy) => (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-2">
        <Badge variant="secondary">{caseStudy.type}</Badge>
        <Badge variant="outline">{caseStudy.industry}</Badge>
      </div>
      
      <h3 className="text-2xl font-bold text-foreground">{caseStudy.title}</h3>
      <p className="text-muted-foreground">{caseStudy.context}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Target className="h-4 w-4" />
              Goal
            </h4>
            <p className="text-muted-foreground">{caseStudy.goal}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Users className="h-4 w-4" />
              My Role
            </h4>
            <p className="text-muted-foreground">{caseStudy.role}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Constraints
            </h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {caseStudy.constraints.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>

          {caseStudy.challenges && caseStudy.challenges.length > 0 && (
            <div>
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                ⚠ Challenges
              </h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {caseStudy.challenges.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech, idx) => (
                <Badge key={idx} variant="outline">{tech}</Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Key Decisions
            </h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {caseStudy.keyDecisions.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {caseStudy.images && caseStudy.images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudy.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${caseStudy.title} screenshot`} className="rounded-lg border border-border" />
          ))}
        </div>
      )}

      <div>
        <h4 className="font-semibold text-foreground mb-2">Process</h4>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          {caseStudy.process.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
      
      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
        <h4 className="font-semibold text-foreground mb-2">Results</h4>
        <p className="text-primary font-medium">{caseStudy.result.metric}</p>
        <p className="text-muted-foreground">{caseStudy.result.outcome}</p>
        {caseStudy.feedback && (
          <p className="text-muted-foreground italic mt-2">"{caseStudy.feedback}"</p>
        )}
      </div>
      
      <div className="flex flex-wrap gap-4 pt-4">
        {caseStudy.links.live && (
          <Button variant="outline" size="sm" asChild>
            <a href={caseStudy.links.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
        {caseStudy.links.source && (
          <Button variant="outline" size="sm" asChild>
            <a href={caseStudy.links.source} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Source Code
            </a>
          </Button>
        )}
        <Button variant="outline" size="sm" onClick={() => toggleCaseStudy(null)}>
          Close Details
        </Button>
      </div>
    </div>
  );

  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Case <span className="text-primary">Studies</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Case studies showing problems, decisions, solutions, and measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {caseStudies.map((caseStudy) => (
            <div 
              key={caseStudy.id} 
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              {expandedCaseStudy === caseStudy.id 
                ? renderDetailedView(caseStudy) 
                : renderSummaryView(caseStudy)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CaseStudies };
