import {Tweet as TweetType} from "../routes/Home";
import {Button} from "antd";

const Tweet = (props: {tweet: TweetType, isOwner: boolean, onDelete: Function}) => {
    const {tweet, isOwner, onDelete} = props;
    return <>
        <div key={tweet.id}>
            <span>{tweet.text} {tweet.created && new Date(tweet.created).toLocaleString()}</span>
            {isOwner &&
                <>
                    <Button onClick={() => onDelete(tweet.id)}>Delete</Button>
                    <Button>Modify</Button>
                </>
            }
        </div>
    </>;
}

export default Tweet;
