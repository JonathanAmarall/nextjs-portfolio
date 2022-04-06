import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface IProjects {
  cover: string;
  title: string;
  description: string;
}

export default function CarouselSlide({ ...restProps }) {
  const [projects, setProjects] = useState<IProjects[]>([
    {
      cover:
        'https://www.figmacrush.com/wp-content/uploads/2020/04/figma-mobile-banking-app-template-1014x487.jpg',
      description: 'A project example 1',
      title: 'Banking App',
    },
    {
      cover:
        'https://www.figmacrush.com/wp-content/uploads/2020/04/figma-mobile-banking-app-template-1014x487.jpg',
      description: 'A project example 2',
      title: 'Banking App',
    },
    {
      cover:
        'https://www.figmacrush.com/wp-content/uploads/2020/04/figma-mobile-banking-app-template-1014x487.jpg',
      description: 'A project example 3',
      title: 'Banking App',
    },
  ]);

  return (
    <Carousel {...restProps} showArrows={true}>
      {projects.map((project) => (
        <div style={{ height: '470px' }}>
          <img src={project.cover} />
          <p className="legend">
            <a href="#">{project.title}</a>
          </p>
          <Text fontSize={'2xl'}>{project.description}</Text>
        </div>
      ))}
    </Carousel>
  );
}
