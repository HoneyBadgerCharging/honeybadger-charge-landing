import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  // Sample blog post data - in a real app, this would be fetched based on slug
  const post = {
    title: "The Future of EV Charging: What to Expect in 2024",
    excerpt: "Explore the latest trends and innovations shaping the electric vehicle charging landscape",
    content: `
      <p>The electric vehicle (EV) charging landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are shaping the future of how we power our electric vehicles.</p>
      
      <h2>Ultra-Fast Charging Technology</h2>
      <p>One of the most significant developments in EV charging is the advancement of ultra-fast charging technology. With charging speeds reaching 350kW and beyond, drivers can now add hundreds of miles of range in just 15-20 minutes.</p>
      
      <p>This technology is being deployed across major charging networks, making long-distance EV travel more convenient than ever before. The key innovations include:</p>
      
      <ul>
        <li>Liquid-cooled charging cables that can handle higher power levels</li>
        <li>Advanced battery management systems that optimize charging speeds</li>
        <li>Smart load balancing to distribute power efficiently across multiple vehicles</li>
      </ul>
      
      <h2>Smart Grid Integration</h2>
      <p>The integration of EV charging infrastructure with smart grid technology is revolutionizing how we think about energy management. This bidirectional flow of electricity allows EVs to not only consume power but also feed energy back into the grid during peak demand periods.</p>
      
      <p>Benefits of smart grid integration include:</p>
      
      <ul>
        <li>Reduced strain on the electrical grid during peak hours</li>
        <li>Lower electricity costs for EV owners through dynamic pricing</li>
        <li>Enhanced grid stability and renewable energy integration</li>
      </ul>
      
      <h2>Wireless Charging Solutions</h2>
      <p>Wireless charging technology is moving from concept to reality. Several pilot programs are testing inductive charging systems that can power EVs while parked or even while driving on specially equipped roadways.</p>
      
      <p>While still in early stages, wireless charging promises to eliminate the need for physical connections, making EV charging as simple as parking your car.</p>
      
      <h2>Sustainability Focus</h2>
      <p>Environmental consciousness is driving the adoption of renewable energy sources for EV charging stations. Solar-powered charging stations are becoming increasingly common, and many charging networks are committing to 100% renewable energy sources.</p>
      
      <p>This shift towards sustainable charging aligns with the broader goal of reducing transportation's carbon footprint and creating a truly clean energy ecosystem.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we progress through 2024, the EV charging industry will continue to innovate and expand. With increasing government support, technological advancements, and growing consumer adoption, the future of EV charging looks brighter than ever.</p>
      
      <p>For businesses and property owners, now is the perfect time to invest in EV charging infrastructure. The combination of government incentives, proven ROI, and growing demand makes EV charging a compelling business opportunity.</p>
    `,
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&h=600&fit=crop",
    category: "Technology",
    author: {
      name: "Sarah Johnson",
      role: "EV Technology Specialist",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  };

  const relatedPosts = [
    {
      title: "How to Choose the Right EV Charger for Your Business",
      slug: "choose-right-ev-charger-business",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop"
    },
    {
      title: "EV Charging Station ROI: Maximizing Your Investment",
      slug: "ev-charging-station-roi",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-8 group"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Button>

          {/* Article Header */}
          <header className="mb-12">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>
            
            {/* Meta Information */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline">
                    <BookmarkPlus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Articles */}
          <section className="border-t pt-12">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Card 
                  key={index}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                >
                  <div className="flex gap-4 p-6">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;