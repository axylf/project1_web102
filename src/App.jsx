import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  return (
      <div>
        <h1>Linux Distros:</h1>
        <table>
          <tr>
            <td><Card name='Ubuntu' 
            logo="https://upload.wikimedia.org/wikipedia/commons/7/76/Ubuntu-logo-2022.svg" 
            dlink="https://ubuntu.com/download/desktop"></Card></td>
            <td><Card name='Linux Mint' 
            logo="https://upload.wikimedia.org/wikipedia/commons/3/3f/Linux_Mint_logo_without_wordmark.svg" 
            dlink="https://www.linuxmint.com/edition.php?id=316"></Card></td>
            <td><Card name='Debian' 
            logo="https://upload.wikimedia.org/wikipedia/commons/4/4a/Debian-OpenLogo.svg" 
            dlink="https://www.debian.org/download"></Card></td>
          </tr>
          <tr>
            <td><Card name='Arch Linux' 
            logo="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/archlinux-512.png" 
            dlink="https://archlinux.org/download/"></Card></td>
            <td><Card name='Manjaro' 
            logo="https://upload.wikimedia.org/wikipedia/commons/3/3e/Manjaro-logo.svg" 
            dlink="https://www.debian.org/download"></Card></td>
            <td><Card name='MX Linux' 
            logo="https://upload.wikimedia.org/wikipedia/commons/2/29/MX_LINUX_Logo.svg" 
            dlink="https://mxlinux.org/download-links/"></Card></td>
          </tr>
          <tr>
            <td><Card name='OpenSUSE' 
            logo="https://upload.wikimedia.org/wikipedia/commons/d/d0/OpenSUSE_Logo.svg" 
            dlink="https://get.opensuse.org/"></Card></td>
            <td><Card name='Fedora' 
            logo="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fedora_logo.svg" 
            dlink="https://fedoraproject.org/workstation/"></Card></td>
            <td><Card name='CentOS Stream' 
            logo="https://upload.wikimedia.org/wikipedia/commons/d/d8/Centos-logo-2022.svg" 
            dlink="https://centos.org/centos-stream/"></Card></td>
          </tr>
          <tr>
          <td><Card name='Kali Linux' 
            logo="https://upload.wikimedia.org/wikipedia/commons/4/4b/Kali_Linux_2.0_wordmark.svg" 
            dlink="https://www.kali.org/get-kali/#kali-installer-images"></Card></td>
          </tr>
        </table>
      </div>
  )
}

export default App
