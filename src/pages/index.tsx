import Head from 'next/head';
import { Header } from '../componentes/Header';
import styles from '../styles/home.module.scss';
import { Button as AboutButton } from '../componentes/Button';

import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Textarea,
  useDisclosure,
  Text,
  Button,
} from '@chakra-ui/react';
import { Title } from '../componentes/Title';
import CarouselSlide from '../componentes/CarouselSlide';
import ScrollToTop from 'react-scroll-to-top';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>Jon</title>
      </Head>
      <Header />
      <ScrollToTop smooth color="#6f00ff" />
      {/* Page Home */}
      <div className={styles.backgroundImage}>
        <div className={styles.authorContainer}>
          <div>
            <h1>Jonathan Amaral</h1>
            <h2>Web Developer</h2>
            <AboutButton onClick={onOpen} title={'About Me'} />
            <Modal
              isCentered
              isOpen={isOpen}
              onClose={onClose}
              colorScheme="cyan"
            >
              <ModalContent>
                <ModalCloseButton />
                <ModalBody
                  display={'flex'}
                  flexDir="column"
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Text fontSize="4xl">Hello!</Text>
                  <Text fontSize="4xl">I'm Jonathan Amaral.</Text>
                  <Text fontSize="4xl">Web developer from Brazil.</Text>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className={styles.socialMidiaContainer}>
          <a href="#">
            <BsLinkedin size={'3rem'} color="#1C1D25" />
          </a>
          <a href="#">
            <BsGithub size={'3rem'} color="#1C1D25" />
          </a>
          <a href="#">
            <BsInstagram size={'3rem'} color="#1C1D25" />
          </a>
        </div>
      </div>
      {/* Page Skills */}
      <Box
        id="skills"
        display={'flex'}
        alignItems="center"
        justifyContent={'center'}
        height="800px"
      >
        <Box
          display={'flex'}
          flexDir="column"
          alignItems="center"
          justifyContent={'center'}
        >
          <Title name={'Skills'} />
          <Box display={'flex'} alignItems="center" justifyContent={'center'}>
            <svg
              width="855"
              height="288"
              viewBox="0 0 855 288"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.81 1.026L4.55301 21.88L13.916 99.517L63.873 126.974L114.087 99.146L123.447 21.511L63.81 1.026Z"
                fill="#B3B3B3"
              />
              <path
                d="M117.536 25.998L63.672 7.62903V120.414L108.813 95.431L117.536 25.998Z"
                fill="#A6120D"
              />
              <path
                d="M11.201 26.329L19.227 95.763L63.671 120.414V7.62701L11.201 26.329Z"
                fill="#DD1B16"
              />
              <path
                d="M78.499 67.67L63.672 74.604H48.044L40.697 92.978L27.034 93.232L63.672 11.724L78.499 67.67ZM77.065 64.179L63.77 37.858L52.864 63.726H63.671L77.065 64.179Z"
                fill="#F2F2F2"
              />
              <path
                d="M63.671 11.724L63.769 37.858L76.144 63.746H63.698L63.671 74.587L80.88 74.604L88.922 93.234L101.996 93.476L63.671 11.724Z"
                fill="#B3B3B3"
              />
              <path
                d="M283.4 30.7L235.1 2.90001C234.3 2.40001 233.2 2.20001 232 2.20001C230.8 2.20001 229.7 2.50001 228.9 2.90001L180.9 30.8C179.2 31.8 178 34.3 178 36.2V91.9C178 93 178.2 94.3 179 95.4L285.8 33.4C285.2 32.2 284.3 31.3 283.4 30.7Z"
                fill="#9B4F96"
              />
              <path
                d="M178.7 95.3C179.2 96.1 179.9 96.8 180.6 97.2L228.8 125.1C229.6 125.6 230.7 125.8 231.9 125.8C233.1 125.8 234.2 125.5 235 125.1L283 97.2C284.7 96.2 285.9 93.7 285.9 91.8V36.1C285.9 35.2 285.8 34.2 285.3 33.3L178.7 95.3Z"
                fill="#68217A"
              />
              <path
                d="M253.3 76.1C249.1 83.5 241.1 88.5 232 88.5C218.5 88.5 207.5 77.5 207.5 64C207.5 50.5 218.5 39.5 232 39.5C241.1 39.5 249.1 44.5 253.3 52L266.3 44.5C259.5 32.6 246.7 24.5 232 24.5C210.2 24.5 192.5 42.2 192.5 64C192.5 85.8 210.2 103.5 232 103.5C246.6 103.5 259.4 95.5 266.2 83.7L253.3 76.1ZM265 66.2L265.9 61.9H261.7V57.2H266.8L268 51H272.9L271.7 57.1H275.5L276.7 51H281.5L280.3 57.1H282.7V61.8H279.4L278.5 66.1H282.7V70.8H277.6L276.4 76.8H271.5L272.7 70.8H268.9L267.7 76.8H262.9L264.1 70.8H261.7V66.1H265V66.2ZM269.8 66.2H273.6L274.5 61.9H270.7L269.8 66.2Z"
                fill="white"
              />
              <path
                d="M464.182 33.793L411.327 8.188C407.994 6.604 403.654 6.604 400.294 8.188L346.874 33.793C343.434 35.444 341 38.547 341 41.866V93.008C341 96.327 343.498 99.431 346.938 101.091L361.052 107.779C367.797 110.551 370.181 110.551 373.251 110.551C383.239 110.551 388.944 105.512 388.944 96.723V46.233C388.944 45.52 388.5 44.459 387.661 44.459H380.921C380.068 44.459 378.157 45.52 378.157 46.232V96.722C378.157 100.618 373.933 104.495 366.039 101.202L351.455 94.189C350.947 93.959 350.589 93.496 350.589 93.008V41.866C350.589 41.384 351.254 40.9 351.766 40.653L405.013 15.092C405.51 14.857 406.242 14.857 406.738 15.092L459.335 40.647C459.839 40.9 459.661 41.369 459.661 41.866V93.008C459.661 93.496 459.881 93.971 459.383 94.206L406.541 119.782C406.088 120.009 405.526 120.009 405.03 119.782L391.477 113.033C391.068 112.835 390.583 112.764 390.191 112.947C386.42 114.73 385.725 114.967 382.188 115.99C381.318 116.243 380.034 116.682 382.679 117.919L400.416 126.673C402.11 127.489 404.031 127.919 405.986 127.919C407.954 127.919 409.882 127.493 411.58 126.673L464.181 101.091C467.621 99.419 469.251 96.327 469.251 93.008V41.866C469.251 38.547 467.621 35.452 464.182 33.793ZM422.398 84.904C408.343 84.904 405.247 81.669 404.215 75.838C404.095 75.21 403.456 74.459 402.69 74.459H395.821C394.971 74.459 394.288 75.319 394.288 76.025C394.288 83.491 399.153 92.537 422.399 92.537C439.226 92.537 448.874 87.082 448.874 77.428C448.874 67.856 441.122 65.344 424.803 63.542C408.308 61.723 406.632 60.804 406.632 57.58C406.632 54.922 408.051 51.377 420.265 51.377C431.179 51.377 435.201 53.331 436.856 59.468C436.998 60.045 437.63 60.459 438.343 60.459H445.24C445.664 60.459 446.069 60.316 446.366 60.063C446.654 59.791 446.806 59.45 446.768 59.084C445.7 48.516 437.284 43.591 420.264 43.591C405.124 43.591 396.093 48.925 396.093 57.866C396.093 67.564 405.079 70.244 419.612 71.443C436.998 72.865 438.35 74.985 438.35 77.838C438.35 82.793 433.582 84.904 422.398 84.904Z"
                fill="#83CD29"
              />
              <path
                d="M513.861 70.5V133H663.688V8H513.861V70.5ZM634.597 65.5C638.186 66.1948 641.447 67.7606 643.97 70C645.359 71.2064 646.567 72.5497 647.566 74C647.566 74.16 641.094 77.81 637.15 79.85C637.006 79.93 636.431 79.41 635.796 78.62C635.076 77.5837 634.053 76.7164 632.823 76.0991C631.592 75.4818 630.195 75.1346 628.76 75.09C624.217 74.83 621.293 76.82 621.317 80.09C621.279 80.9041 621.502 81.7119 621.964 82.43C622.959 84.16 624.817 85.19 630.642 87.29C641.369 91.14 645.96 93.68 648.813 97.29C652.001 101.29 652.708 107.75 650.551 112.53C648.154 117.73 642.28 121.26 633.974 122.43C630.18 122.793 626.347 122.759 622.563 122.33C616.788 121.548 611.461 119.254 607.353 115.78C605.974 114.51 603.289 111.2 603.457 110.96C603.895 110.689 604.356 110.445 604.836 110.23L610.349 107.59L614.652 105.51L615.551 106.62C617.068 108.431 618.999 109.973 621.233 111.16C626.027 113.26 632.572 112.97 635.808 110.54C636.894 109.65 637.572 108.469 637.723 107.205C637.874 105.941 637.489 104.672 636.635 103.62C635.436 102.23 633.039 101.06 626.339 98.62C618.608 95.84 615.276 94.12 612.231 91.38C610.331 89.5719 608.927 87.4386 608.12 85.13C607.518 82.4924 607.429 79.7912 607.856 77.13C609.45 70.9 615.048 66.55 623.222 65.26C627.008 64.8692 630.843 64.9569 634.597 65.52V65.5ZM599.43 70.74V75.86H579.976V122.09H566.18V75.85H546.679V70.85C546.627 69.1287 546.683 67.4064 546.847 65.69C546.919 65.61 558.833 65.57 573.216 65.59H599.358L599.43 70.74Z"
                fill="#007ACC"
              />
              <path
                d="M779.033 88.3C786.579 88.3 792.697 83.196 792.697 76.9C792.697 70.604 786.579 65.5 779.033 65.5C771.486 65.5 765.369 70.604 765.369 76.9C765.369 83.196 771.486 88.3 779.033 88.3Z"
                fill="#61DAFB"
              />
              <path
                d="M830.933 58.1C828.296 57.3 825.539 56.5 822.662 55.8C823.382 53.4 823.981 51 824.46 48.7C826.977 35.5 824.221 26.2 816.55 22.6C814.272 21.5 811.755 21 808.878 21C800.488 21 789.821 26.2 779.033 34.9C768.246 26.2 757.578 21 749.188 21C746.311 21 743.794 21.5 741.517 22.6C733.845 26.3 731.089 35.6 733.606 48.7C734.085 51 734.684 53.4 735.404 55.8C732.527 56.5 729.77 57.2 727.133 58.1C712.151 62.9 704 69.5 704 76.9C704 84.3 712.27 90.9 727.133 95.7C729.77 96.5 732.527 97.3 735.404 98C734.684 100.4 734.085 102.8 733.606 105.1C731.089 118.3 733.845 127.6 741.517 131.2C743.794 132.3 746.311 132.8 749.188 132.8C757.698 132.8 768.365 127.6 779.033 118.9C789.821 127.6 800.488 132.8 808.878 132.8C811.755 132.8 814.272 132.3 816.55 131.2C824.221 127.5 826.977 118.2 824.46 105.1C823.981 102.8 823.382 100.4 822.662 98C825.539 97.3 828.296 96.6 830.933 95.7C845.915 90.9 854.066 84.3 854.066 76.9C854.066 69.5 845.915 62.9 830.933 58.1ZM813.193 27.6C818.108 30 819.786 37.4 817.748 47.9C817.389 50 816.789 52.2 816.07 54.5C809.837 53.3 803.245 52.5 796.293 52C792.218 47.2 788.023 42.9 783.827 39C792.697 31.7 801.687 26.7 808.998 26.7C810.556 26.7 811.995 27 813.193 27.6ZM799.769 86.9C797.611 90.1 795.094 93.3 792.457 96.5C788.023 96.8 783.588 96.9 779.033 96.9C774.358 96.9 769.924 96.8 765.609 96.5C762.972 93.3 760.574 90.1 758.417 86.9C756.14 83.6 753.982 80.2 752.064 76.9C753.982 73.6 756.14 70.2 758.417 66.9C760.574 63.7 763.091 60.5 765.728 57.3C770.163 57 774.598 56.9 779.153 56.9C783.827 56.9 788.262 57 792.577 57.3C795.214 60.5 797.611 63.7 799.769 66.9C802.046 70.2 804.204 73.6 806.122 76.9C804.084 80.2 802.046 83.5 799.769 86.9ZM809.717 83.6C811.515 87.1 812.954 90.5 814.272 93.9C810.197 94.7 805.882 95.3 801.327 95.8C802.766 93.9 804.324 91.9 805.642 89.8C807.08 87.7 808.399 85.6 809.717 83.6ZM779.033 110.7C776.156 108.1 773.4 105.3 770.763 102.4C773.519 102.5 776.276 102.6 779.033 102.6C781.79 102.6 784.547 102.5 787.303 102.4C784.666 105.3 781.91 108.1 779.033 110.7ZM756.739 95.7C752.184 95.2 747.869 94.6 743.794 93.8C745.112 90.5 746.551 87 748.349 83.5C749.667 85.5 750.986 87.6 752.424 89.6C753.862 91.8 755.301 93.7 756.739 95.7ZM748.349 70.2C746.551 66.7 745.112 63.3 743.794 59.9C747.869 59.1 752.184 58.5 756.739 58C755.301 59.9 753.742 61.9 752.424 64C750.986 66.1 749.667 68.2 748.349 70.2ZM779.033 43.1C781.91 45.7 784.666 48.5 787.303 51.4C784.547 51.3 781.79 51.2 779.033 51.2C776.276 51.2 773.519 51.3 770.763 51.4C773.4 48.5 776.156 45.7 779.033 43.1ZM805.642 64.1L801.327 58.1C805.882 58.6 810.197 59.2 814.272 60C812.954 63.3 811.515 66.8 809.717 70.3C808.399 68.2 807.08 66.1 805.642 64.1ZM740.318 47.9C738.28 37.4 739.958 30 744.873 27.6C746.071 27 747.51 26.7 749.068 26.7C756.259 26.7 765.249 31.6 774.239 39C770.043 42.8 765.848 47.2 761.773 52C754.821 52.5 748.229 53.4 741.996 54.5C741.277 52.2 740.797 50 740.318 47.9ZM710.712 76.9C710.712 72.2 717.544 67.2 729.53 63.5C731.928 62.7 734.565 62 737.202 61.4C739.119 66.4 741.517 71.7 744.393 77C741.517 82.3 738.999 87.5 737.202 92.5C720.661 88.5 710.712 82.5 710.712 76.9ZM744.873 126.2C739.958 123.8 738.28 116.4 740.318 105.9C740.677 103.8 741.277 101.6 741.996 99.3C748.229 100.5 754.821 101.3 761.773 101.8C765.848 106.6 770.043 110.9 774.239 114.8C765.369 122.1 756.379 127.1 749.068 127.1C747.51 127.1 746.071 126.8 744.873 126.2ZM817.748 105.9C819.786 116.4 818.108 123.8 813.193 126.2C811.995 126.8 810.556 127.1 808.998 127.1C801.807 127.1 792.817 122.2 783.827 114.8C788.023 111 792.218 106.6 796.293 101.8C803.245 101.3 809.837 100.4 816.07 99.3C816.789 101.6 817.269 103.8 817.748 105.9ZM828.536 90.3C826.138 91.1 823.501 91.8 820.865 92.4C818.947 87.4 816.55 82.1 813.673 76.8C816.55 71.5 819.067 66.3 820.865 61.3C837.405 65.3 847.354 71.3 847.354 76.9C847.354 81.6 840.402 86.6 828.536 90.3Z"
                fill="#61DAFB"
              />
              <path
                d="M135.106 275.215L123.114 163H254.884L242.879 275.198L188.919 287.678L135.106 275.215Z"
                fill="#E44D26"
              />
              <path
                d="M188.999 278.139L232.602 268.053L242.861 172.175H188.999V278.139Z"
                fill="#F16529"
              />
              <path
                d="M188.999 213.794H167.17L165.662 199.7H188.999V185.938H147.634L148.029 189.63L152.083 227.557H188.999V213.794ZM188.999 249.537L188.926 249.554L170.555 245.414L169.381 234.439H152.82L155.131 256.048L188.924 263.874L188.999 263.857V249.537Z"
                fill="#EBEBEB"
              />
              <path
                d="M188.942 213.794V227.557H209.254L207.34 245.406L188.942 249.549V263.868L222.76 256.048L223.009 253.723L226.885 217.49L227.286 213.794H222.842H188.942ZM188.942 185.938V199.7H228.788L229.119 196.608L229.872 189.63L230.266 185.938H188.942Z"
                fill="white"
              />
              <path
                d="M542.423 275.504L529.443 163H672.078L659.085 275.487L600.674 288L542.423 275.504Z"
                fill="#1572B6"
              />
              <path
                d="M601.36 279L647.935 268.815L658.893 172H601.36V279Z"
                fill="#33A9DC"
              />
              <path
                d="M601.36 213.111H624.763L626.379 198.889H601.36V185H645.708L645.284 188.727L640.936 227H601.36V213.111Z"
                fill="white"
              />
              <path
                d="M601.36 248.875L601.28 248.892L581.193 244.815L579.909 234H561.806L564.332 255.291L601.278 263L601.36 262.982V248.875Z"
                fill="#EBEBEB"
              />
              <path
                d="M623.191 226L621.063 244.484L601.36 248.639V263L637.575 255.158L637.841 252.826L640.914 226H623.191Z"
                fill="white"
              />
              <path
                d="M601.36 185V198.888H557.44L557.076 195.767L556.248 188.726L555.812 185H601.36ZM601.298 213.112V227H581.303L580.939 223.879L580.11 216.838L579.676 213.112H601.298Z"
                fill="#EBEBEB"
              />
              <path
                d="M332.871 154V279H482.697V154H332.871ZM412.122 260.513C409.91 264.262 405.689 266.725 400.797 267.914C393.281 269.354 386.092 268.533 380.743 265.855C377.164 264.023 374.369 261.203 372.472 257.954L383.883 252.124C383.982 252.159 384.282 252.611 384.682 253.195C386.137 255.229 387.392 256.669 389.859 257.68C392.282 258.37 397.603 258.811 399.657 255.253C400.912 253.443 400.513 247.625 400.513 241.188C400.512 231.073 400.568 221 400.568 211H414.603C414.603 222 414.675 232.418 414.603 243.152C414.633 249.732 415.317 255.598 412.122 260.513ZM470.343 257.205C465.465 271.127 438.266 271.579 427.397 262.381C425.1 260.216 423.661 259.085 422.291 256.586C428.067 253.814 428.067 253.814 433.687 251.101C436.74 255.016 439.563 257.169 444.641 258.05C451.531 258.752 458.463 256.777 456.908 250.672C455.31 245.686 442.8 244.473 434.287 239.141C425.643 234.298 423.618 222.53 430.721 215.806C433.088 213.319 437.125 211.463 441.361 210.571L445.781 210.094C454.269 209.951 459.574 211.821 463.468 215.449C464.551 216.365 465.436 217.353 467.09 219.494C462.569 221.898 462.583 221.875 456.107 225.373C454.724 222.887 452.429 221.327 450.003 220.649C446.237 219.697 441.488 220.732 440.503 224.052C440.161 225.075 440.232 226.027 440.775 227.717C442.3 230.62 447.421 231.882 452.014 233.643C465.236 238.117 469.701 242.914 470.799 248.624C471.856 253.54 470.543 256.729 470.343 257.205Z"
                fill="#F0DB4F"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      {/* Page Contact */}
      <Flex
        id="contact"
        dir="column"
        flexDir="column"
        w={'98vw'}
        h="700px"
        justify="center"
        align={'center'}
        className={styles.backgroundImageInverse}
      >
        <Box alignItems={'center'}>
          <Title name="Contact" />
        </Box>
        <Flex
          as="form"
          width={'100%'}
          maxW={600}
          flexDir="column"
          bg="gray.800"
          p="8"
          borderRadius={8}
        >
          <FormControl pb={3}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" size="sm" />
          </FormControl>
          <Button type="submit" mt="6" bg="var(--primary)" colorScheme="purple">
            Send Message
          </Button>
        </Flex>
      </Flex>
      {/* Page Projects */}
      <Flex
        id="projects"
        dir="column"
        flexDir="column"
        w={'98vw'}
        h="100vh"
        justify="center"
        align={'center'}
      >
        <Box alignItems={'center'}>
          <Title name="Projects" />
        </Box>
        <Box maxW={750} alignItems={'center'}>
          <CarouselSlide />
        </Box>
      </Flex>
      {/* Page Blog */}
    </>
  );
}
