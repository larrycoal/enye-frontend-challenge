import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
   const{profile}=props
   console.log(props)
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p id="simple-modal-description">
         FirstName:  {profile.FirstName}
        </p>
        <p id="simple-modal-description">
         LastName:  {profile.LastName}
        </p>
        <p id="simple-modal-description">
         CreditCardNumber:  {profile.CreditCardNumber}
        </p>
        <p id="simple-modal-description">
         CreditCardType  {profile.CreditCardType}
        </p>
        <p id="simple-modal-description">
         DomainName:  {profile.DomainName}
        </p>
        <p id="simple-modal-description">
         Email :{profile.Email}
        </p>
        <p id="simple-modal-description">
         Gender :{profile.Gender}
        </p>
        <p id="simple-modal-description">
         LastLogin:{profile.LastLogin}
        </p>
        <p id="simple-modal-description">
         PaymentMethod :{profile.PaymentMethod}
        </p>
        <p id="simple-modal-description">
         PhoneNumber:{profile.PhoneNumber}
        </p>
        <p id="simple-modal-description">
         URL :{profile.URL}
        </p>
        <p id="simple-modal-description">
         UserName:{profile.UserName}
        </p>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
