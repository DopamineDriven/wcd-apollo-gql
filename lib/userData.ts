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
		image: "/assets/cropped-a.jpg",
		content:
			'"The mechanic that would perfect his work must first sharpen his tools." - Confucius',
		coverphoto: "/assets/next-jamstack.jpg",
		birthday: "03-11-1992"
	},
	{
		id: "2",
		name: "Joe Shields",
		role: "CEO",
		email: "joe@windycitydevs.io",
		github: "https://github.com/JShields30",
		twitter: "https://twitter.com/JShields312",
		linkedin: "https://www.linkedin.com/in/jshields90/",
		image: "/assets/Joe.jpg",
		content:
			'"A leader gives articulation of the imagination of the population" - Jordan Peterson',
		coverphoto: "/assets/next-jamstack.jpg",
		birthday: ""
	},
	{
		id: "3",
		name: "Yong Lee",
		role: "COO",
		email: "yong@windycitydevs.io",
		github: "https://github.com/yhlee-dho",
		twitter: "https://twitter.com/YongLee08380800",
		linkedin: "https://www.linkedin.com/in/yong-lee-a16430193/",
		image: "/assets/yong.jpg",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		coverphoto: "/assets/next-jamstack.jpg",
		birthday: ""
	}
];

export default users;
