import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Building, Home, ShoppingBag, TreePine, Users, DollarSign, Clock, Shield, Leaf, MapPin, Phone, Mail, CheckCircle, Briefcase } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const HostCharger = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center overflow-hidden">
        {/* Animated Energy Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-primary mr-4 animate-glow" />
              <span className="text-2xl font-bold text-primary">Host a Charger</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              EV Charging Solutions for
              <span className="block text-primary">Every Property Type</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Zero-cost installation and tailored solutions for your business. Start earning revenue from day one with our complete EV charging infrastructure.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Property Types Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions for Every Property
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand that different properties have unique needs. Our tailored approach ensures optimal charging solutions for your specific business type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {[
              { icon: Building, title: "Hotels", subtitle: "Hospitality", color: "text-blue-500" },
              { icon: ShoppingBag, title: "Retail", subtitle: "Shopping Centers", color: "text-red-500" },
              { icon: Briefcase, title: "Workplaces", subtitle: "Offices & Corporate", color: "text-indigo-500" },
              { icon: Home, title: "Residential", subtitle: "Condos & Apartments", color: "text-green-500" },
              { icon: TreePine, title: "Recreation", subtitle: "Golf & Sports Clubs", color: "text-orange-500" }
            ].map((type, index) => (
              <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <type.icon className={`w-12 h-12 mx-auto mb-4 ${type.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground">{type.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels & Retail Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              EV Charging Solutions for Hotels and Retail Stores
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-4xl mx-auto">
              Enhance guest and customer experience by offering EV charging solutions. HoneyBadger understands the hospitality and retail sectors' unique needs, working closely with you to design charging centres that integrate seamlessly with your business operations and brand image.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Solution Selection</h3>
                  <p className="text-muted-foreground">
                    At HoneyBadger, we prioritize installing chargers that make sense for your business. Our experts and technicians will sit down with you to understand your property and customer needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Charging Centre Design</h3>
                  <p className="text-muted-foreground">
                    Explore our comprehensive Parking Stall Specifications Guide, offering various design options for the ground, walls, and pillars of your EV charging centre.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Marketing & PR Support</h3>
                  <p className="text-muted-foreground">
                    By embracing greener solutions and installing EV chargers, you not only make a positive impact on the environment but also position yourself as an industry leader.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Hotels & Retail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
                  Benefits of EV Charging for Hotels and Retail Stores
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Enhanced Guest Experience</h3>
                      <p className="text-muted-foreground">
                        Provide a valuable amenity that modern travelers expect. EV charging stations enhance guest satisfaction and can influence booking decisions, especially for eco-conscious customers who prioritize sustainable travel options.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Increased Dwell Time</h3>
                      <p className="text-muted-foreground">
                        EV drivers typically spend 30-60 minutes charging their vehicles. This extended stay time increases opportunities for additional purchases, dining, and services, directly boosting your revenue per customer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Premium Pricing Opportunity</h3>
                      <p className="text-muted-foreground">
                        Hotels can command premium rates for rooms near charging stations or offer charging as part of premium packages. Retail locations can attract higher-income EV owners who typically have greater spending power.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Competitive Advantage</h3>
                      <p className="text-muted-foreground">
                        Stand out from competitors by offering EV charging amenities. This differentiator can be the deciding factor for travelers and shoppers choosing between similar establishments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-2xl flex items-center justify-center">
                    <div className="flex items-center space-x-4">
                      <Building className="w-16 h-16 text-primary" />
                      <ShoppingBag className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golf Courses & Recreation Sites Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              EV Charging Solutions for Golf Courses, Tennis Clubs, Community & Fitness Centers, Gyms, and Recreation Sites
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-4xl mx-auto">
              Designing an EV charging centre for your site requires careful consideration of factors such as your property's electrical infrastructure and the vehicle types your guests drive. HoneyBadger understands the importance of optimizing the number of chargers to balance cost-effectiveness and meeting visitor needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Infrastructure Upgrades</h3>
                  <p className="text-muted-foreground">
                    HoneyBadger's experienced electricians and technicians perform electrical assessments, capacity upgrades, and ensure compatibility with your fleet's power grid.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Charging Centre Design</h3>
                  <p className="text-muted-foreground">
                    Explore our comprehensive Parking Stall Specifications Guide, offering various design options for the ground, walls, and pillars of your EV charging centre.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Marketing & PR Support</h3>
                  <p className="text-muted-foreground">
                    By embracing greener solutions and installing EV chargers, you position yourself as an industry leader in sustainability and environmental responsibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Recreation Sites */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
                  Benefits of EV Charging for Golf Courses and Recreation Sites
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Attract High-Income Athletes</h3>
                      <p className="text-muted-foreground">
                        Golf players and recreation athletes often fall within the high-income bracket and higher household incomes are very clearly linked to higher rates of EV ownership. A prime example is Anmore, BC, where the median household income of $162,000 corresponds to a high EV adoption rate of 15 EVs per 1000 people.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Promote Longer Stays</h3>
                      <p className="text-muted-foreground">
                        Electric vehicle drivers often plan their trips around the availability of charging infrastructure. By offering EV chargers, you encourage longer stays from EV owners who are more likely to spend time and money at your golf course or recreation site while their vehicles charge.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Added Revenue Stream</h3>
                      <p className="text-muted-foreground">
                        Installing EV chargers can create additional revenue streams for your golf course. You can offer charging services as an add-on amenity, attracting new customers and generating income from charging fees.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Sustainability Leadership</h3>
                      <p className="text-muted-foreground">
                        Demonstrate your commitment to environmental responsibility and position your facility as a leader in sustainable recreation practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-2xl flex items-center justify-center">
                    <Zap className="w-24 h-24 text-primary animate-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workplaces Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              EV Charging Solutions for Workplaces and Offices
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-4xl mx-auto">
              Attract and retain employees by offering EV charging solutions at your workplace. HoneyBadger understands the unique needs of corporate environments and works closely with you to design charging centers that seamlessly integrate with your workplace infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Solution Selection</h3>
                  <p className="text-muted-foreground">
                    Our experts work with HR and facilities teams to understand employee needs, parking patterns, and usage requirements to design the optimal charging solution for your workplace.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Charging Centre Design</h3>
                  <p className="text-muted-foreground">
                    From surface parking lots to underground garages, we design charging stations that integrate seamlessly with your existing workplace infrastructure and aesthetic.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Employee Benefits Integration</h3>
                  <p className="text-muted-foreground">
                    We help you integrate EV charging into your employee benefits package, positioning your company as a forward-thinking, environmentally conscious employer.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits for Workplaces */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-primary">
                  Benefits of EV Charging for Workplaces
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Employee Attraction & Retention</h4>
                      <p className="text-muted-foreground text-sm">
                        Offer a valuable perk that helps attract top talent and retain existing employees, especially those with eco-conscious values.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Corporate Sustainability Goals</h4>
                      <p className="text-muted-foreground text-sm">
                        Demonstrate your commitment to environmental sustainability and help achieve corporate ESG objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Reduced Peak Load Stress</h4>
                      <p className="text-muted-foreground text-sm">
                        Most EV drivers charge during peak evening hours. Workplace charging can alleviate stress on employees who need to charge their vehicles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Brand Leadership</h4>
                      <p className="text-muted-foreground text-sm">
                        Position your company as an industry leader in innovation and environmental responsibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-2xl flex items-center justify-center">
                    <Briefcase className="w-24 h-24 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Condos & Apartments Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                EV Charging Solutions for Apartments, Condos, and Co-ops
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Designing EV charging centres for high-rise residential buildings requires careful consideration of charger selection, budgeting, and installation. At HoneyBadger we collaborate closely with you to customize your charging centre, ensuring it perfectly caters to the diverse needs of your tenants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Solution Selection</h3>
                  <p className="text-muted-foreground">
                    At HoneyBadger, we prioritize building chargers that are cost-effective and cater to your tenants' vehicle preferences and usage patterns, all while respecting budget constraints and existing infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Charging Centre Design</h3>
                  <p className="text-muted-foreground">
                    Explore our comprehensive Parking Stall Specifications Guide, offering various design options for underground and surface parking areas that work within your building's constraints.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Government Rebate Process</h3>
                  <p className="text-muted-foreground">
                    Our consultants and government tracking apps understand the local standards involved in the hundreds of charger markets across the country.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits for Condos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-primary">
                  Benefits of EV Chargers for Condos & Apartments
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Attract High-Income Tenants</h4>
                      <p className="text-muted-foreground text-sm">
                        EV owners typically have higher household incomes and are willing to pay premium rents for properties with charging amenities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Increased Property Value</h4>
                      <p className="text-muted-foreground text-sm">
                        Installing EV chargers can increase your property value and make your building more attractive to potential buyers and tenants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Enhanced Tenant Satisfaction</h4>
                      <p className="text-muted-foreground text-sm">
                        Providing convenient charging solutions enhances tenant satisfaction and reduces turnover rates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Environmental Responsibility</h4>
                      <p className="text-muted-foreground text-sm">
                        Demonstrate your building's commitment to sustainability and environmental stewardship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-2xl flex items-center justify-center">
                    <Building className="w-24 h-24 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              What to Expect from HoneyBadger Services
            </h2>
            
            <div className="space-y-4">
              {[
                { step: "1", title: "Consultation", description: "Initial assessment and customized solution design" },
                { step: "2", title: "Design", description: "Detailed planning and engineering specifications" },
                { step: "3", title: "Pre-Installation", description: "Permits, approvals, and site preparation" },
                { step: "4", title: "Installation", description: "Professional installation by certified technicians" },
                { step: "5", title: "Network Connection", description: "Connect to charging network and test systems" },
                { step: "6", title: "Support & Maintenance", description: "Ongoing monitoring and maintenance support" }
              ].map((item, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-muted-foreground">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HoneyBadger Claw Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              HoneyBadger Claw
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Charging at standard capacity from 5% to 80% takes just 2.5 hours
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Our all-commercial charging infrastructure, built for charging speed, current, voltages and battery load of the most modern vehicles
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Includes 2 CCS cords and 1 CHAdeMO charging Type-4 testing, providing flexibility for charging multiple vehicle types
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Our back-up and maintenance and 24 The responsive 30-k/W (Dual charge output)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center">
                      <Zap className="w-24 h-24 text-primary animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Charging CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Charging
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Ready to embrace the electric revolution and start paving the path to a sustainable EV charging solution together with HoneyBadger charging solutions forward?
          </p>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-lg font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HostCharger;
