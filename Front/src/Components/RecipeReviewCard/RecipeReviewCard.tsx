import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const MAX_LENGTH_DESCTIPTION = 140

const compressMaxLength = (description: string) => {
  if (description.length > MAX_LENGTH_DESCTIPTION) {
    return description.substr(0, MAX_LENGTH_DESCTIPTION) + '...'
  }
  return description
}

export default function RecipeReviewCard(props: IPropCard) {

  const card = props

  return (
    <Card sx={{ width: 270, maxHeight: 260 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={card.title}
        subheader={card.creationDate.toLocaleString("pt-BR")}
      />
     
      <CardContent sx={{maxHeight: 100, height: 100}}>
        <Typography variant="body2" color="text.secondary">
          {compressMaxLength(card.description)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
