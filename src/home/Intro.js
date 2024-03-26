import { Image, Container, Figure } from 'react-bootstrap'
import Foto from '../asset/Foto.jpg'
import '../style/Intro.css'

const Intro = () => {
    return (
        <div className='Intro'>
            <Image className='Img' src={Foto} roundedCircle/>
            <h1>MUHAMMAD FADHEL RAIHAN</h1>
            <h3>Mahasiswa yang sedang menekuni bidang Pemograman, Desain Grafis dan Video Editing</h3>
        </div>
    )
}

export default Intro;