import React from "react";

const FAQitems = ({ question, answer }) => {
  return (
    <>
      <div className="flex flex-row w-full overflow-hidden">
        <div className="join join-vertical  text-gray-700">
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">{question}</div>
            <div className="collapse-content text-sm">{answer}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQitems;
