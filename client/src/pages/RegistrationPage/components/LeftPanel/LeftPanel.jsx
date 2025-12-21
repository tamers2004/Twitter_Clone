
import SignInModal from "../../../../components/Modal/SignInModal/SignInModal"
import TermsService from "../../../../components/Modal/TermsService/TermsService"
import MainTitles from "../MainTitles/MainTitles"
import OldUsersForm from "../OldUsersForm/OldUsersForm"
import GeneralButton from "../GeneralButton/GeneralButton"
import Modal from "../../../../components/Modal/Modal"
import "./LeftPanel.css"
import { useState } from "react"

const LeftPanel = () => {
  const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);



  return (
    <div id="left_panel">
      <MainTitles />
      <OldUsersForm />
      <TermsService />

      <div className="button-container">


        {/* sign in button */}
        <GeneralButton backgroundColor="black" textColor="white"
          onClick={() => { setSignInModalIsOpen(true) }}
          child={<span>entry</span>} />



        {/* go to grok.com button */}
        <GeneralButton hoverBackgroundColor="green" onClick={() => {
          window.location.href = "https://grok.com"
        }} backgroundColor="black" textColor="white" child={<span>Getting Grok</span>} />

      </div>


      <Modal isOpen={signInModalIsOpen}
        title={"hello this is a test modal"}
        onClose={() => setSignInModalIsOpen(false)}
        children={<SignInModal />}
      />


    </div>
  )
}

export default LeftPanel