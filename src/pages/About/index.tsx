import Heading from '../../components/Heading';
import Block from '../../components/Block';
import styles from './index.module.css';
// import { FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className={styles.container}>
      {/* Main heading */}
      <Heading
        variant="bold40"
        level="h1"
        className={styles.mainTitle}
      >
        À propos de nous
      </Heading>

      {/* Subtitle */}
      <Heading
        variant="normal18"
        level="p"
        className={styles.subtitle}
      >
        Découvrez qui nous sommes, ce qui nous anime et comment nous travaillons pour
        transformer vos idées en expériences mémorables.
      </Heading>

      {/* Content blocks container */}
      <div className={styles.blocksContainer}>
        <Block className={styles.block1}>
          {/* Content for block 1 */}
        </Block>

        <Block className={styles.block2}>
          {/* Content for block 2 */}
        </Block>

        <Block className={styles.block3}>
          {/* Content for block 3 */}
        </Block>

        <Block className={styles.block4}>
          {/* Content for block 4 */}
        </Block>
      </div>

      {/* Main content area */}
      <div className={styles.contentArea}>
        <Heading variant="bold40" level="h1" className={styles.contentTitle}>
          Notre histoire
        </Heading>
        <div className={styles.contentText}>
          <p>
            Solux Vision Media est une agence créative et technologique, née de la
            conviction que chaque idée mérite d'être mise en lumière. Notre société est
            officiellement enregistrée en République Démocratique du Congo, avec un
            siège opérationnel à Helsinki.
          </p>
          <p>
            Nous bénéficions d'une équipe répartie entre la Russie, la Pologne, le Gabon et
            la RDC, ce qui enrichit notre approche par des perspectives multiculturelles et
            une grande flexibilité.
          </p>
          <p>
            Ancrés par la conviction que chaque idée mérite d'être mise en lumière, nous
            allions créativité, innovation technologique et rigueur stratégique pour renforcer
            la notoriété, l'engagement et la croissance durable de nos clients.
          </p>
        </div>

      </div>
        {/* <div className={styles.featureBlocksContainer}>
        <div className={styles.featureBlock}>
          <div className={styles.blockIcon}>
            <FaLightbulb size={40} color="#171F60" />
          </div>
          <Heading variant="bold25" level="h3" className={styles.blockTitle}>
            Notre Approche
          </Heading>
          <p className={styles.blockText}>
            Une méthodologie centrée sur l'utilisateur qui combine créativité et technologie pour des solutions sur mesure et impactantes.
          </p>
          <ul className={styles.blockList}>
            <li>Stratégie digitale sur mesure</li>
            <li>Design centré utilisateur</li>
            <li>Technologies innovantes</li>
            <li>Approche agile</li>
          </ul>
        </div>

        <div className={styles.featureBlock}>
          <div className={styles.blockIcon}>
            <FaUsers size={40} color="#171F60" />
          </div>
          <Heading variant="bold25" level="h3" className={styles.blockTitle}>
            Nos Valeurs
          </Heading>
          <p className={styles.blockText}>
            Des principes forts qui guident chacune de nos actions et collaborations.
          </p>
          <ul className={styles.blockList}>
            <li>Transparence et honnêteté</li>
            <li>Excellence créative</li>
            <li>Collaboration étroite</li>
            <li>Impact positif</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};


export default About;
