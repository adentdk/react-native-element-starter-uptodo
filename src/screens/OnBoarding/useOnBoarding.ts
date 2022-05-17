
import OnBoardingImage1 from '@assets/svg-ilustrations/OnBoarding-1.svg';
import OnBoardingImage2 from '@assets/svg-ilustrations/OnBoarding-2.svg';
import OnBoardingImage3 from '@assets/svg-ilustrations/OnBoarding-3.svg';
import { useState } from 'react';

const ON_BOARDING_DATA = [
  {
    image: OnBoardingImage1,
    title: 'Manage your tasks',
    description: 'You can easily manage all of your daily tasks in DoMe for free',
  },
  {
    image: OnBoardingImage2,
    title: 'Create daily routines',
    description: 'In Uptodo  you can create your personalized routine to stay productive',
  },
  {
    image: OnBoardingImage3,
    title: 'Orgonaize your tasks',
    description: 'You can organize your daily tasks by adding your tasks into separate categories',
  },
];

const useOnBoarding = () => {
  const [onBoardingData] = useState(ON_BOARDING_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  return {
    onBoardingData,
    currentIndex,
    setCurrentIndex,
  }
}

export default useOnBoarding;
