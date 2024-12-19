export interface Member {
  name: string;
  designation: string;
  image: string;
}

export interface Committee {
  name: string;
  members: Member[];
}

export const committees: Committee[] = [
  {
    name: "Core Committee",
    members: [
      {
        name: "John Smith",
        designation: "Chairperson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        name: "Sarah Johnson",
        designation: "Vice Chairperson",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        name: "Michael Brown",
        designation: "Secretary",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        name: "Emily Davis",
        designation: "Treasurer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    ]
  },
  {
    name: "Technical Team",
    members: [
      {
        name: "David Wilson",
        designation: "Technical Lead",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        name: "Lisa Anderson",
        designation: "Web Developer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        name: "James Taylor",
        designation: "System Administrator",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        name: "Rachel Martinez",
        designation: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    ]
  }
];