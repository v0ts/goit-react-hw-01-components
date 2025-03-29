import profile from "./user.json";
import { Profile } from "./Profile/Profile";
import data from "./data.json";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendsList/FriendsList";
import friends from "./friends.json";
import transactions from "./transactions.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Profile
        key={profile.Profile.id}
        name={profile.Profile.name}
        tag={profile.Profile.tag}
        location={profile.Profile.location}
        avatar={profile.Profile.avatar}
        followers={profile.Profile.followers}
        views={profile.Profile.views}
        likes={profile.Profile.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
