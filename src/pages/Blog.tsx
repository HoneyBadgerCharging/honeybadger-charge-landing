import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of EV Charging: What to Expect in 2024",
    excerpt: "Explore the latest trends and innovations shaping the electric vehicle charging landscape, from ultra-fast charging to smart grid integration.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop",
    slug: "future-of-ev-charging-2024",
    category: "Technology",
    featured: true
  },
  {
    id: 2,
    title: "How to Choose the Right EV Charger for Your Business",
    excerpt: "A comprehensive guide to selecting the perfect charging solution for your commercial property, covering everything from power requirements to user experience.",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    slug: "choose-right-ev-charger-business",
    category: "Business",
    featured: false
  },
  {
    id: 3,
    title: "EV Charging Station ROI: Maximizing Your Investment",
    excerpt: "Learn how property owners are generating substantial returns with EV charging infrastructure and discover strategies to optimize your investment.",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
    slug: "ev-charging-station-roi",
    category: "Finance",
    featured: false
  },
  {
    id: 4,
    title: "Sustainable Charging: Solar-Powered EV Stations",
    excerpt: "Discover how solar-powered EV charging stations are revolutionizing sustainable transportation and reducing carbon footprints.",
    date: "February 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    slug: "solar-powered-ev-stations",
    category: "Sustainability",
    featured: false
  },
  {
    id: 5,
    title: "EV Charging Network Expansion: State of the Industry",
    excerpt: "An in-depth look at the rapid expansion of EV charging networks across the country and what it means for drivers and businesses.",
    date: "February 20, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1593941707876-6f2fd5fa4c4a?w=600&h=400&fit=crop",
    slug: "ev-charging-network-expansion",
    category: "Industry",
    featured: false
  },
  {
    id: 6,
    title: "Smart Charging: The Role of AI in EV Infrastructure",
    excerpt: "Explore how artificial intelligence is optimizing EV charging operations, from load balancing to predictive maintenance.",
    date: "February 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    slug: "smart-charging-ai-ev-infrastructure",
    category: "Technology",
    featured: false
  }
];

const categories = ["All", "Technology", "Business", "Finance", "Sustainability", "Industry"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              EV Charging <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay ahead with the latest trends, tips, and insights from the world of electric vehicle charging.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 justify-center flex-wrap">
                {categories.map(category => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
            <Card 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => navigate(`/blog/${featuredPost.slug}`)}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{featuredPost.date}</span>
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            {searchTerm ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4">{post.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;