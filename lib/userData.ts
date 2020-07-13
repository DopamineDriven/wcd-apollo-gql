import { User } from "./viewer.graphql";

const users: User[] = [
	{
		id: "1",
		name: "Andrew Ross",
		role: "CTO",
		email: "andrew@windycitydevs.io",
		github: "https://github.com/DopamineDriven",
		twitter: "https://twitter.com/Dopamine_Driven",
		linkedin: "https://www.linkedin.com/in/asross/",
		image:
			"https://res.cloudinary.com/asross311/image/upload/v1592831978/ASR_Assets/cropped-a_nqaem7.png",
		content:
			'"The mechanic that would perfect his work must first sharpen his tools." - Confucius',
		coverphoto: "https://res.cloudinary.com/asross311/image/upload/v1594586260/ASR_Assets/next-jamstack_ml7non.png"
	},
	{
		id: "2",
		name: "Joe Shields",
		role: "CEO",
		email: "joe@windycitydevs.io",
		github: "https://github.com/JShields30",
		twitter: "https://twitter.com/JShields312",
		linkedin: "https://www.linkedin.com/in/jshields90/",
		image:
			"https://res.cloudinary.com/asross311/image/upload/v1592801826/ASR_Assets/Joe_vlnzpm.jpg",
		content:
			"JAMstack, Baby JAMstack! JAMstack, Baby JAMstack! OooooooOOOooo!",
		coverphoto: "https://res.cloudinary.com/asross311/image/upload/v1594605276/ASR_Assets/Peter-Lik-Chicago_zamhq1.webp"
	},
	{
		id: "3",
		name: "Yong Lee",
		role: "COO",
		email: "yong@windycitydevs.io",
		github: "https://github.com/yhlee-dho",
		twitter: "https://twitter.com/YongLee08380800",
		linkedin: "https://www.linkedin.com/in/yong-lee-a16430193/",
		image:
			"https://res.cloudinary.com/asross311/image/upload/v1594134267/ASR_Assets/Ghengis_Yong_epwjh8.png",
		content:
			"My milkshake brings all the 🐜🐜🐜 to the yard and they are like, BUILD DIG KILL",
		coverphoto: "https://res.cloudinary.com/asross311/image/upload/v1594605138/ASR_Assets/Banner-GreatBarrierReef_i1d1zy.jpg"
	}
];

export default users;
