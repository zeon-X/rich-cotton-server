const Team = require("../models/Team");

function createSlug(line) {
  if (typeof line !== "string") {
    throw new Error("Input must be a string");
  }
  return line
    .toLowerCase() // Convert to lowercase
    .trim() // Trim leading/trailing whitespace
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

// Create a new team
exports.createTeam = async (req, res) => {
  try {
    let mem = {
      ...req.body,
      slug: createSlug(`${req.body?.name} ${req.body?.position}`),
    };
    const team = new Team(mem);
    await team.save();
    res.status(201).json(team);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all teams
exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find().sort({ priority: 1 }); // 1 for ascending order, -1 for descending order
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single team by ID
exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.status(200).json(team);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a team by ID
exports.updateTeam = async (req, res) => {
  try {
    let mem = {
      ...req.body,
      slug:
        req.body.slug !== null || req.body.slug !== ""
          ? req.body.slug
          : createSlug(`${team.name} ${team.position}`),
    };
    const team = await Team.findByIdAndUpdate(req.params.id, mem, {
      new: true, // Return the updated team
    });
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.status(200).json(team);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a team by ID
exports.deleteTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndRemove(req.params.id);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.status(200).json({ message: "Team deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create multiple teams
exports.createTeamsMultiple = async (req, res) => {
  let teamArray = [
    {
      priority: 1,
      name: "Jake",
      position: "Managing Director",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Jake, an astute leader in the buying house and garments trade, steers our company's success as the Managing Director, combining industry expertise with effective global partnerships.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 2,
      name: "Md. Tariqul Islam",
      position: "Group Director",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Md. Tariqul Islam, a seasoned professional with a profound understanding of the industry, assumes the role of Group Director, guiding our diverse portfolio with strategic insights and collaborative leadership.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 3,
      name: "Md. Mehadul Hossain",
      position: "AGM-Marketing and Merchandising",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "As the Assistant General Manager of Marketing and Merchandising, Md. Mehadul Hossain plays a key role in shaping our brand's success. He leads marketing strategies, collaborates with diverse teams, and oversees merchandising operations. His responsibilities include enhancing brand visibility, driving customer engagement, and ensuring a seamless connection between marketing efforts and merchandising initiatives to achieve sustainable business growth.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 4,
      name: "Md. Monirul Islam",
      position: "AGM, Merchandising ",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Monirul Islam, a dynamic leader in the merchandising realm, assumes the role of AGM Merchandising Manager, guiding and inspiring our team to excel in client relations, production coordination, and delivering exceptional results.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 5,
      name: "Md. Mehedi Hasan",
      position: "Manager, Merchandising ",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Md. Mehedi Hasan, a skilled merchandising enthusiast, excels in his role as our Merchandising Specialist, orchestrating seamless coordination between clients and production teams, resulting in successful product delivery and customer satisfaction.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 6,
      name: "Aminul Islam",
      position: "Assistant Manager, Merchandising",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Aminul Islam, a skilled merchandising enthusiast, excels in his role as our Merchandising Specialist, orchestrating seamless coordination between clients and production teams, resulting in successful product delivery and customer satisfaction.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 7,
      name: "Md. Masum Haque",
      position: "Assistant Manager, Merchandising",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Md. Masum Haque, a skilled merchandising enthusiast, excels in his role as our Merchandising Specialist, orchestrating seamless coordination between clients and production teams, resulting in successful product delivery and customer satisfaction.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 8,
      name: "Habib Reza",
      position: "Assistant Manager, Merchandising ",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Habib Reza, a skilled merchandising enthusiast, excels in his role as our Merchandising Specialist, orchestrating seamless coordination between clients and production teams, resulting in successful product delivery and customer satisfaction.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 9,
      name: "Md Rayhan Sharif",
      position: "Assistant Manager, Merchandising",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Md Rayhan Sharif, a skilled merchandising enthusiast, excels in his role as our Merchandising Specialist, orchestrating seamless coordination between clients and production teams, resulting in successful product delivery and customer satisfaction.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 10,
      name: "Bibi Fatema Lima",
      position: "Merchandiser",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Bibi Fatema Lima, as a Merchandiser, orchestrates product development and production processes. She liaises between buyers and production teams, managing orders, overseeing quality checks, and ensuring timely delivery. Her role involves coordinating various aspects of procurement, production, and logistics to meet client specifications and maintain efficiency in the supply chain.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 11,
      name: "Fahmida Islam Lamiya",
      position: "Assistant Merchandiser",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "As an Assistant Merchandiser, Fahmida Islam Lamiya supports merchandise activities, aiding in order coordination, sample management, and communication with suppliers. She assists in product development, monitors production timelines, and helps ensure quality standards. Her role involves collaborating across departments to facilitate smooth operations within the supply chain.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 12,
      name: "S M Hasibullah",
      position: "AGM, Fabric & Garment QA ",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "S M Hasibullah , a discerning expert in fabric and garments quality, leads as an Assistant General Manager, ensuring impeccable standards across our product range through meticulous evaluation and continuous improvement strategies.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 13,
      name: "Md. Abu Younos",
      position: "Gm Technical ",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "As the Technical General Manager at our garments company, Md. Abu Younos plays a pivotal role in overseeing technical aspects of production. He ensures seamless operations, quality control, and adherence to industry standards. With a focus on efficiency and innovation, Md Younus contributes to the continuous improvement of our manufacturing processes.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 14,
      name: "Billal",
      position: "Assistant Manager Sample & CAD ",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        " Billal, as the Assistant Manager for Sample and CAD at our garments company, plays a crucial role in overseeing the development of garment samples and using Computer-Aided Design (CAD) tools. His responsibilities include coordinating sample creation, ensuring accuracy in design, and optimizing the use of CAD technology to streamline the production process.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 15,
      name: "Omar Faruk",
      position: "Sr. Technician",
      phone: "+8801715-86 51 49",
      email: " jake@richcotton.net",
      details:
        "Md. Omar Faruk, a garments technical expert with an unwavering commitment to quality, assumes the role of Garments Technical Lead, ensuring precision and excellence in every aspect of our apparel production process.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },

    {
      priority: 16,
      name: "Md. Ibrahim Hossain",
      position: "Manager, CSR",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Md Ibrahim Hossain, as  Manager CSR, oversees our corporate social responsibility initiatives. He coordinates community engagement programs, ensures ethical practices within the organization, and leads sustainability efforts. His role involves fostering partnerships, implementing CSR strategies, and promoting social and environmental welfare aligned with company values.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 17,
      name: "Md. Ismail",
      position: "Manager, R&D",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Md Ismail Hossain, as the Garments R&D Manager, spearheads research and development initiatives in our apparel company. He leads projects, manages resources, and drives innovation in garment design and production processes. His role focuses on enhancing product quality, efficiency, and sustainability while staying at the forefront of fashion industry trends.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
    {
      priority: 18,
      name: "Sindhumoy Debnath",
      position: "GM Logistics",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "As the General Manager of Logistics, Sindhumoy Debnath oversees the comprehensive logistics operations. He manages transportation, warehousing, and distribution, ensuring efficient supply chain management. Sindhumoy strategizes logistics planning, optimizes routes, and implements cost-effective measures while maintaining high standards of delivery and inventory management. His role is pivotal in streamlining operations and ensuring smooth, timely product movement.  ",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },

    {
      priority: 19,
      name: "Amimul Islam",
      position: "Manager, Accounts",
      phone: "+8801715-86 51 49",
      email: "jake@richcotton.net",
      details:
        "Amimul Islam, a diligent financial professional with a penchant for accuracy, serves as the Accounts Manager, overseeing fiscal operations and ensuring meticulous financial management within our organization.",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "",
    },
  ];
  teamArray.forEach((team) => {
    team.slug = createSlug(`${team.name} ${team.position}`);
  });
  try {
    const teams = await Team.insertMany(teamArray); // Expecting req.body.teams to be an array of team objects
    res.status(201).json(teams);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
