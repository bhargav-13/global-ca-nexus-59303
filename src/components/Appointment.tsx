import { useState } from "react";
import { Calendar, Clock, User, Video, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Appointment = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const currentMonth = "October 2025";
  const availableDates = [13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 27, 28];
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleDateSelect = (day) => {
    if (availableDates.includes(day)) {
      setSelectedDate(day);
      setStep(2);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Appointment Booked!",
      description: `Your 30-minute consultation on October ${selectedDate} at ${selectedTime} has been confirmed. Check your email for the Zoom link.`,
    });

    // Reset
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section id="appointment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Book Your Consultation
            </div>
            
            <h2 className="mb-6">
              Schedule a <span className="text-primary">30 Minute Zoom</span> Meeting
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get expert financial advice tailored to your business needs. Our chartered accountants are ready to help you navigate complex accounting challenges.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Expert Chartered Accountant</div>
                  <div className="text-sm text-muted-foreground">
                    Professional consultation with global experience
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Web conferencing details provided</div>
                  <div className="text-sm text-muted-foreground">
                    Zoom meeting link sent upon confirmation
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">30 minutes</div>
                  <div className="text-sm text-muted-foreground">
                    Focused consultation to address your needs
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                1
              </div>
              <div className={`flex-1 h-1 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                2
              </div>
              <div className={`flex-1 h-1 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                3
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mb-8">
              <span>Select Date</span>
              <span>Select Time</span>
              <span>Your Details</span>
            </div>
          </div>

          {/* Right Content - Booking Interface */}
          <div className="relative">
            <Card className="shadow-professional">
              <CardContent className="p-8">
                {/* Step 1: Date Selection */}
                {step === 1 && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold">{currentMonth}</h3>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                        <div key={i} className="text-center text-sm font-medium text-muted-foreground">
                          {day}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {[...Array(35)].map((_, i) => {
                        const day = i - 2;
                        const isCurrentMonth = day > 0 && day <= 31;
                        const isAvailable = availableDates.includes(day);
                        
                        return (
                          <div
                            key={i}
                            onClick={() => handleDateSelect(day)}
                            className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all ${
                              isAvailable
                                ? "bg-primary text-primary-foreground font-semibold cursor-pointer hover:scale-110 hover:shadow-md"
                                : isCurrentMonth
                                ? "text-muted-foreground"
                                : "text-muted-foreground/30"
                            }`}
                          >
                            {isCurrentMonth ? day : ""}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Available dates</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                          <span className="font-medium text-foreground">Click to select</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Time Selection */}
                {step === 2 && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold">Select Time</h3>
                      <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                        Change Date
                      </Button>
                    </div>

                    <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm text-muted-foreground">Selected Date</div>
                      <div className="font-semibold text-foreground">October {selectedDate}, 2025</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                      {timeSlots.map((time, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          className="h-12 hover:bg-primary hover:text-primary-foreground transition-all"
                          onClick={() => handleTimeSelect(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: User Details */}
                {step === 3 && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold">Your Details</h3>
                      <Button variant="ghost" size="sm" onClick={() => setStep(2)}>
                        Change Time
                      </Button>
                    </div>

                    <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm text-muted-foreground">Selected Slot</div>
                      <div className="font-semibold text-foreground">
                        October {selectedDate}, 2025 at {selectedTime}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <Button
                        onClick={handleSubmit}
                        className="w-full gradient-accent text-accent-foreground font-semibold h-12"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Confirm Appointment
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;