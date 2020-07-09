import { User } from "./viewer.graphql";

const users: User[] = [
	{
		id: "1",
		name: "Andrew Ross",
		role: "CTO",
		email: "andrew@windycitydevs.io",
		image:
			"https://res.cloudinary.com/asross311/image/upload/v1592831978/ASR_Assets/cropped-a_nqaem7.png",
		source: "https://github.com/DopamineDriven",
		content:
			'<p>First and foremost, TypeScript puts the super in superset, especially in a team environment. State management in React can be cumbersome, which is why I consider GraphQL and Apollo to be the dynamic duo. That said, Redux and Recoil each have their use-cases as well.</p><p>As far as primary prebuilts are concerened, the "Next.js" framework is top-notch. It removes the otherwise tedious process of manually configuring Webpack to support a server-side rendering app from the equation. It saves time, simplifies optimization, and delivers blazing fast performance to ultimately enhance end-user experience.</p><p> "The mechanic that would perfect his work must first sharpen his tools." - <em>Confucius</em></p><br />'
	},
	{
		id: "2",
		name: "Joe Shields",
		role: "CEO",
		email: "joe@windycitydevs.io",
		source: "https://github.com/JShields30",
		image:
			"https://res.cloudinary.com/asross311/image/upload/v1592801826/ASR_Assets/Joe_vlnzpm.jpg",
		content:
			"<p>Software Engineer skilled in both back-end and front-end, with particular interest in design and UX-UI experience. My career as a director of market research inspired me to pursue my true passion of creating web applications. I love being creative and unique, but I also appreciate the technical challenges of back-end development. When programming I follow structure and order, since this is essential when creating quality web applications. I enjoy debugging and critiquing small details, as well as optimizing applications. Working in a team setting is ideal, because more knowledge is obtained and retained between developers.</p>"
	},
	{
		id: "3",
		name: "Yong Lee",
		role: "COO",
		email: "yong@windycitydevs.io",
		source: "https://github.com/yhlee-dho",
		image:
			"https://res.cloudinary.com/asross311/image/upload/v1594134267/ASR_Assets/Ghengis_Yong_epwjh8.png",
		content:
			'<p>Currently working on a new discord bot -- "WAFFLES". Everyone is going to want a piece of that syrupy, flaky, Yonglicious good-good.</p>'
	}
];

export default users;