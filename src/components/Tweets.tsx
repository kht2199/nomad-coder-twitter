import {Tweet as TweetType} from "../routes/Home";
import Tweet from "./Tweet";
import {User} from "@firebase/auth";

const Tweets = (props: {user: User, tweets: TweetType[], onDelete: Function}) => {
    const {user, tweets, onDelete} = props;
    return <>
        {tweets.map((t, idx) => (
            <Tweet tweet={t} isOwner={user.uid === t.creatorId} onDelete={onDelete} />
        ))}
    </>;
}

export default Tweets;
