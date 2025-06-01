import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/team/Kailash.webp",
      firstName: "Kailash",
      lastName: "G",
      positions: ["Head of Operations"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/kailash1203/",
        },
        {
          name: "Github",
          url: "https://github.com/Kailash1233",
        },
        // {
        //   name: "X",
        //   url: "https://x.com/Kailash61203",
        // },
      ],
    },
    {
      imageUrl: "/team/Askar.webp",
      firstName: "Askar",
      lastName: "MD",
      positions: ["CoFounder & Head of Marketing"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/mohammed-askar-9b1079221/",
        },
      ],
    },
    {
      imageUrl: "/team/Prem.webp",
      firstName: "Prem",
      lastName: "Kumar",
      positions: ["Technology & Development"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/premkumar0708/",
        },
        {
          name: "Github",
          url: "https://github.com/Premkumar708",
        },
      ],
    },
    {
      imageUrl: "/team/Fardeen.webp",
      firstName: "Ibrahim",
      lastName: "Fardeen",
      positions: ["Technology & Development"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ibrahim-fardeen-754770254/",
        },
        {
          name: "Github",
          url: "https://github.com/ibrahimfardeen",
        },
      ],
    },

    {
      imageUrl: "/team/Prethvii.webp",
      firstName: "Prethive",
      lastName: "Raj",
      positions: ["Web Developer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/prethiveraj-v/",
        },
      ],
    },
    // {
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   firstName: "Evan",
    //   lastName: "James",
    //   positions: ["Backend Developer"],
    //   socialNetworks: [
    //     {
    //       name: "LinkedIn",
    //       url: "https://www.linkedin.com/in/leopoldo-miranda/",
    //     },
    //     {
    //       name: "Github",
    //       url: "https://github.com/leoMirandaa",
    //     },
    //     {
    //       name: "X",
    //       url: "https://x.com/leo_mirand4",
    //     },
    //   ],
    // },
    // {
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   firstName: "Pam",
    //   lastName: "Taylor",
    //   positions: ["Fullstack Developer", "UX Researcher"],
    //   socialNetworks: [
    //     {
    //       name: "X",
    //       url: "https://x.com/leo_mirand4",
    //     },
    //   ],
    // },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The Company Dream Team
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt="Adszoo Digital Marketing"
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-1">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
