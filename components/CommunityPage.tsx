
import React from 'react';
import PageHeader from './PageHeader';
import DiscordIcon from './icons/DiscordIcon';
import TwitchIcon from './icons/TwitchIcon';
import TwitterIcon from './icons/TwitterIcon';

const CommunityCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  bgColor: string;
  hoverColor: string;
}> = ({ icon, title, description, link, bgColor, hoverColor }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex flex-col items-center justify-center p-8 rounded-lg text-center shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${bgColor} ${hoverColor}`}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-200">{description}</p>
  </a>
);

const CommunityPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Join the Community"
        subtitle="Connect with fellow gamers, join discussions, and stay in the loop."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        <CommunityCard
          icon={<DiscordIcon className="w-16 h-16" />}
          title="Join our Discord"
          description="Chat with the community, find groups, and participate in events."
          link="#"
          bgColor="bg-[#5865F2]"
          hoverColor="hover:bg-[#4a56d1]"
        />
        <CommunityCard
          icon={<TwitchIcon className="w-16 h-16" />}
          title="Follow on Twitch"
          description="Watch live streams, gameplay reveals, and developer interviews."
          link="#"
          bgColor="bg-[#9146FF]"
          hoverColor="hover:bg-[#7a3be0]"
        />
        <CommunityCard
          icon={<TwitterIcon className="w-16 h-16" />}
          title="Follow on X"
          description="Get real-time updates, news, and behind-the-scenes content."
          link="#"
          bgColor="bg-[#1DA1F2]"
          hoverColor="hover:bg-[#1a8cd8]"
        />
      </div>
    </div>
  );
};

export default CommunityPage;
