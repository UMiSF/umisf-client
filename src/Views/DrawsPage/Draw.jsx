import { Bracket } from "react-brackets";

export default function Draw(){
    const rounds = [
    {
      title: 'Round one',
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
      ],
    },
    {
      title: 'Round one',
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team C' }],
        },
      ],
    },
  ];
  
  const Component = () => {
    return <Bracket rounds={rounds} />;
  };
    return(
        <Bracket rounds={rounds} roundTitleComponent={(title, roundIndex) => {
            return <div style={{ textAlign: 'center', color: 'red' }}>{title}</div>;
          }} />
    )
}
