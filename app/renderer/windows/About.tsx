import React, {useEffect} from 'react';
import {Panel, Typography, WindowButtons} from '../ui/Layout';
import {Button} from '../ui/Input';

import hordelogo from '../images/hordelogo.png';
import {version} from '../../../package.json';

const About = () => {
    useEffect(() => {
        document.title = "About"
    })
    return (
        <>
            <Panel>
                <div className={"eve-credits-container eve-scrollbar"}>
                  <Typography>
                      <h1 style={{textAlign: 'center'}}>EveVision</h1>
                      <h4 style={{textAlign: 'center'}}>{version}</h4><br />
                      <h2 style={{textAlign: 'center'}}>This tool is not endorsed or approved by CCP.</h2>
                      <div style={{textAlign: 'center'}}>
                          This software is licensed under the GPLv3 license.<br />
                          You can download the source code and new releases from <a href={"https://github.com/evevision/evevision"} target={"_blank"}>https://github.com/evevision/evevision</a>.<br />
                          For support, please visit our Discord channel at <a href={"https://discord.gg/BBBJRkM"} target={"_blank"}>https://discord.gg/BBBJRkM</a>.<br />
                          <br/>ISK Donations are accepted to the ingame character <strong>EveVision</strong>.<br/>
                      </div><br />
                  </Typography><br />
                  <Typography>
                      <h1>Credits</h1><br/>
                      Special thanks to CCP for allowing a tool like this to exist and giving us APIs to interact with our favorite game. Your neverending support of the developer community is forever appreciated.
                      <br />
                      <br />
                      <h1>EveVision Development Team</h1>
                      <h2>Software</h2>
                      <hr />
                      <table className={"eve-credits"}>
                          <tr>
                              <td>Creator & Maintainer :</td>
                              <td>Jaydubs</td>
                          </tr>
                          <tr>
                              <td>Jukebox :</td>
                              <td>Niedar</td>
                          </tr>
                          <tr>
                              <td>Build Scripts :</td>
                              <td>Eris Kirke</td>
                          </tr>
                      </table>
                      <h2>Translations</h2>
                      <hr />
                      <table className={"eve-credits"}>
                          <tr>
                              <td>русский :</td>
                              <td><strong>Mortis en Divalone</strong> of <strong>Inner Hell</strong></td>
                          </tr>
                      </table>
                      <br />
                      <h2>Patreon Donators</h2>
                      <hr/>
                      <h4>You can donate at <a href={"https://patreon.com/evevision"} target={"_blank"}>https://patreon.com/evevision</a> to get your character name here <strong>forever.</strong></h4><br/><br/>
                      <h1 style={{textAlign: 'center', fontWeight: 'normal', textShadow: '0px 2px 2px red'}}>Mr. Helious Jin-Mei & Mrs. Wheezy Garlic of Northern Coalition.</h1>
                      <br />
                      <h2  style={{textAlign: 'center', fontWeight: 'normal', textShadow: '0px 2px 2px gold'}}>Sonya Rovana of Capital Fusion</h2>
                      <br />
                      <h4 style={{textAlign: 'center', fontWeight: 'normal', textShadow: '0px 2px 2px silver'}}>Andres M Afanador of DICE / Inner Hell</h4>
                    </Typography>
                  </div>
                </Panel>
                <WindowButtons>
                  <Button onClick={() => {window.close()}}>Close</Button>
                </WindowButtons>
        </>
    );
}

export default About;
