import { keyframes } from 'styled-components';

//sun animation
export const bright = keyframes`
0%{
  filter:brightness(1);
}
25%{
  filter:brightness(0.95);
}
50%{
  filter:brightness(1);
}
75%{
  filter:brightness(1.05);
}
100%{
  filter:brightness(1);
}
`;

//cloud animation
export const right = keyframes`
0%{
  transform:translateX(0);
}
50%{
  transform:translateX(10px);
}
100%{
  transform:translateX(0);
}
`;

export const left = keyframes`
0%{
  transform:translateX(0);
}
50%{
  transform:translateX(-10px);
}
100%{
  transform:translateX(0);
}
`;

export const drop = keyframes`
0%{
  opacity:1;
}
50%{
  opacity:0;
}
100%{
  opacity:1;
}
`;
