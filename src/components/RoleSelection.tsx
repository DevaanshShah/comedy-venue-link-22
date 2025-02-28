
import { useState } from "react";
import { Link } from "react-router-dom";
import { Laugh, MicStage, Landmark, Users } from "lucide-react";
import GlassCard from "./ui-components/GlassCard";
import AnimatedElement from "./ui-components/AnimatedElement";
import Button from "./ui-components/Button";

type RoleType = "venue" | "comedian" | "audience" | null;

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState<RoleType>(null);

  const handleRoleSelect = (role: RoleType) => {
    setSelectedRole(role);
  };

  const roles = [
    {
      id: "venue",
      title: "Venue Owner",
      icon: Landmark,
      description: "Register your comedy venue, manage bookings, and host the best comedians.",
      color: "text-comedy-red",
      dashboard: "/venue-dashboard",
    },
    {
      id: "comedian",
      title: "Comedian",
      icon: MicStage,
      description: "Create your profile, submit show proposals, and perform at top venues.",
      color: "text-comedy-purple",
      dashboard: "/comedian-dashboard",
    },
    {
      id: "audience",
      title: "Comedy Fan",
      icon: Laugh,
      description: "Discover shows, book tickets, and enjoy the best live comedy experiences.",
      color: "text-comedy-orange",
      dashboard: "/audience-dashboard",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedElement animation="slide-up" className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Role</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comedy Link brings together all parts of the comedy ecosystem. Select the role that best describes you.
        </p>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
        {roles.map((role, index) => (
          <AnimatedElement 
            key={role.id}
            animation="slide-up"
            delay={400 + (index * 200)}
            className="flex"
          >
            <GlassCard 
              className={`flex-1 p-6 cursor-pointer transition-all duration-300 ${
                selectedRole === role.id 
                  ? "border-2 border-white/30 transform scale-105 shadow-xl" 
                  : "hover:scale-105"
              }`}
              onClick={() => handleRoleSelect(role.id as RoleType)}
            >
              <div className="mb-6 flex justify-center">
                <div className={`rounded-full p-4 ${role.color} bg-white/5`}>
                  <role.icon size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{role.title}</h3>
              <p className="text-muted-foreground text-center mb-6">
                {role.description}
              </p>
              <div className="mt-auto flex justify-center">
                {selectedRole === role.id ? (
                  <Link to={role.dashboard} className="w-full">
                    <Button className="w-full">
                      Continue as {role.title}
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleRoleSelect(role.id as RoleType)}
                  >
                    Select
                  </Button>
                )}
              </div>
            </GlassCard>
          </AnimatedElement>
        ))}
      </div>

      <div className="text-center mt-12">
        <AnimatedElement animation="fade-in" delay={1000}>
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link to="/auth?mode=login" className="text-comedy-red hover:underline">
              Log in
            </Link>
          </p>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default RoleSelection;
