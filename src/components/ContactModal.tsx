import { Modal, ModalTitle, ContactField, ActionButton, StatusMessage } from "../ui";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<Props> = ({ open, onClose }) => {
  if (!open) return null;

  const contactInfo: Record<string, string> = {
    email: "ivan.betanzos89@gmail.com",
    phone: "+34 640 845 607",
    linkedin: "https://www.linkedin.com/in/ivanbetanzosmacias/",
    github: "https://github.com/iv4n89",
    location: "Huelva, Spain",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalTitle>&gt; CONTACT.INIT</ModalTitle>
      <div className="space-y-4">
        <ContactField
          label="EMAIL.ADDRESS"
          value={contactInfo.email}
          actionType="copy"
          onCopy={copyToClipboard}
        />

        <ContactField
          label="PHONE.NUMBER"
          value={contactInfo.phone}
          actionType="copy"
          onCopy={copyToClipboard}
        />

        <ContactField
          label="LINKEDIN.PROFILE"
          value={contactInfo.linkedin}
          actionType="visit"
          href={contactInfo.linkedin}
        />

        <ContactField
          label="GITHUB.PROFILE"
          value={contactInfo.github}
          actionType="visit"
          href={contactInfo.github}
        />

        <ContactField
          label="LOCATION.COORDINATES"
          value={contactInfo.location}
        />
      </div>

      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="text-center">
          <StatusMessage status="AVAILABLE_FOR_PROJECTS" />
          <ActionButton type="close" onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
};
