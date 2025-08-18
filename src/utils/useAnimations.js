import { useContext } from 'react';
import AnimationContext from './AnimationContext';

// Custom hook to use animations
const useAnimations = () => useContext(AnimationContext);

export default useAnimations;
