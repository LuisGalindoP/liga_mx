import React from 'react';

const BannerTeams = (props) => {
    const {teams} = props;
    const uno = 'http://t1.gstatic.com/images?q=tbn:ANd9GcQE2-vwGOI9-lemKf1CBNIs6DhzCEnBIt-mEQr5Vg-4Hmy00ZR2';
    return (
        <div className={'bg-red-100 flex flex-auto justify-center'}>

            {/*<img src={teams[1].teamBanner} alt=""/>*/}
            {teams.map((team, index) =>{
                return (
                    <div>
                        <img src={require('../images/teams/america.png')} alt=""/>
                        <img src={require(`${team.teamBanner}`)} alt=""/>

                    </div>
                )
            })}
        </div>
    )
};

export default BannerTeams;