import React from 'react';

const CaseDetails = ({ id, detail }) => {
//   const caseId = match.params.id;
  const caseData = {
    id: id,
    title: 'Bike Stolen',
    description: 'Ayush garg from delhi stolen the bike of gargi so he can drop her by his bike',
  };

  return (
    <div className="container mx-auto p-4 w-full" hidden={detail}>
      <h1 className="text-3xl font-semibold mb-4">Case Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">{caseData.title}</h2>
        <p className="text-gray-600">{caseData.description}</p>
      </div>
        <form action="/upload" method="post" enctype="multipart/form-data"
         className='container mx-auto p-4 w-full'>
            <input type="file" name="file" multiple />
            <input type="submit" value="Upload" />
        </form>
    </div>
  );
};

export default CaseDetails;
