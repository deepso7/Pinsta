import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import faker from "faker";
import Story from "./Story";

const Stories = () => {
  const { data: session } = useSession();

  const [suggestions, setSuggestions] = useState<Faker.ContextualCard[]>([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile, i) => (
        <Story key={i} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
};

export default Stories;
