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
			'"The expectations of life depend upon diligence; the mechanic that would perfect his work must first sharpen his tools." - Confucius',
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
			"We need to do what any animal in nature does when it’s cornered, act erratically, and blindly lash out at everything around us.",
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
			"Erlich Bachman is a poor sad a man, and he's a very fat. Is that a dead pig? Yes. It's just like Errich. Pig is most like a fat human.",
		coverphoto: "/assets/next-jamstack.jpg",
		birthday: ""
	}
];

export default users;
