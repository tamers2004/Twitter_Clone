
import SignInModal from "../../../../components/Modal/SignInModal/SignInModal"
import TermsService from "../../../../components/Modal/TermsService/TermsService"
import MainTitles from "../MainTitles/MainTitles"
import OldUsersForm from "../OldUsersForm/OldUsersForm"
import GeneralButton from "../GeneralButton/GeneralButton"
import "./LeftPanel.css"

const LeftPanel = () => {
  return (
    <div id="left_panel">
      <MainTitles />
      <OldUsersForm />
      <TermsService />
      <SignInModal />

      <div className="button-container">
        <GeneralButton  backgroundColor="black" textColor="white" child={<span>entry</span>} />
        <GeneralButton hoverBackgroundColor="green" onClick={() => {
          window.location.href = "https://grok.com"
        }} backgroundColor="black" textColor="white" child={<span>Getting Grok</span>} />

      </div>


    </div>
  )
}

export default LeftPanel