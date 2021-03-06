import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sweet from "./Sweet";
import { handleLikeSweet, handleUnlikeSweet } from "../reducer/sweets";
import { withNavigation } from "react-navigation";

const mapStateToProps = ({ sweets, users }, ownProps) => {
  const sweet = sweets[ownProps.sweetId];
  const uid = users.ownInfo._id;
  const hasLiked = sweet.likedUserIds.indexOf(uid) > -1;
  return { sweet, hasLiked, uid };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleLikeSweet,
      handleUnlikeSweet
    },
    dispatch
  );
};

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(Sweet)
);
