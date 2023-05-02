import CriteriaScoreCard from "../criteriaScoreCard/criteriaScoreCard"

const dummyData = [
  {
    percent: 0.7,
    title: 'Pageload time',
    cons: [
      'The website has a clear and intuitive navigation menu with descriptive labels and easy-to-find information.',
      'The website is designed to be responsive to mobile devices, with content that adjusts and scales properly to smaller screens, it could be given a score of 86/100 for mobile responsiveness.'
    ],
    pros: [
      'Poor usability on touchscreens',
      'Slow load times on mobile networks',
    ]
  },
  {
    percent: 0.3,
    title: 'Pageload time',
    cons: [
      'The website has a clear and intuitive navigation menu with descriptive labels and easy-to-find information.',
      'The website is designed to be responsive to mobile devices, with content that adjusts and scales properly to smaller screens, it could be given a score of 86/100 for mobile responsiveness.'
    ],
    pros: [
      'Poor organization of content',
      'Lack of clear calls to action',
      'Lack of search functionality',
      'Slow load times on mobile networks',
    ]
  },
]

const Responsivnes = () => {
  return (
    <>
      <h3>Mobile responsiveness</h3>
      {
        dummyData.map((criteria) => <CriteriaScoreCard {...criteria}/>)
      }
    </>
  )
}

export default Responsivnes