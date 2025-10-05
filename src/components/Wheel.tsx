import React from 'react';

// Define the correct sequence of numbers and their colors for a European roulette wheel
const wheelData = [
  { number: 0, color: 'green' },
  { number: 32, color: 'red' },
  { number: 15, color: 'black' },
  { number: 19, color: 'red' },
  { number: 4, color: 'black' },
  { number: 21, color: 'red' },
  { number: 2, color: 'black' },
  { number: 25, color: 'red' },
  { number: 17, color: 'black' },
  { number: 34, color: 'red' },
  { number: 6, color: 'black' },
  { number: 27, color: 'red' },
  { number: 13, color: 'black' },
  { number: 36, color: 'red' },
  { number: 11, color: 'black' },
  { number: 30, color: 'red' },
  { number: 8, color: 'black' },
  { number: 23, color: 'red' },
  { number: 10, color: 'black' },
  { number: 5, color: 'red' },
  { number: 24, color: 'black' },
  { number: 16, color: 'red' },
  { number: 33, color: 'black' },
  { number: 1, color: 'red' },
  { number: 20, color: 'black' },
  { number: 14, color: 'red' },
  { number: 31, color: 'black' },
  { number: 9, color: 'red' },
  { number: 22, color: 'black' },
  { number: 18, color: 'red' },
  { number: 29, color: 'black' },
  { number: 7, color: 'red' },
  { number: 28, color: 'black' },
  { number: 12, color: 'red' },
  { number: 35, color: 'black' },
  { number: 3, color: 'red' },
  { number: 26, color: 'black' },
];

interface WheelProps {
  markedNumbers: number[];
}

const Wheel: React.FC<WheelProps> = ({ markedNumbers }) => {
  const radius = 200;
  const centerX = radius;
  const centerY = radius;
  const slotAngle = 360 / wheelData.length;
  const textRadius = radius * 0.75; // Adjust the radius for text placement

  return (
    <svg width={radius * 2} height={radius * 2}>
      {wheelData.map((slot, index) => {
        const angle = slotAngle * index;
        const rotate = `rotate(${angle} ${centerX} ${centerY})`;
        const isMarked = markedNumbers.includes(slot.number);

        return (
          <g key={index} transform={rotate}>
            <path
              d={`M${centerX},${centerY} L${centerX + radius * Math.cos((index * 2 * Math.PI) / wheelData.length)},${centerY + radius * Math.sin((index * 2 * Math.PI) / wheelData.length)} A${radius},${radius} 0 0,1 ${centerX + radius * Math.cos(((index + 1) * 2 * Math.PI) / wheelData.length)},${centerY + radius * Math.sin(((index + 1) * 2 * Math.PI) / wheelData.length)} Z`}
              fill={slot.color}
              stroke="black"
            />
            <text
              x={centerX + textRadius * Math.cos(((index + 0.5) * 2 * Math.PI) / wheelData.length)}
              y={centerY + textRadius * Math.sin(((index + 0.5) * 2 * Math.PI) / wheelData.length)}
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="white"
              fontSize="15"
              transform={`rotate(${angle + 90} ${centerX + textRadius * Math.cos(((index + 0.5) * 2 * Math.PI) / wheelData.length)} ${centerY + textRadius * Math.sin(((index + 0.5) * 2 * Math.PI) / wheelData.length)})`} // Rotate text to be upright
            >
              {slot.number}
            </text>
            {isMarked && (
              <circle
                cx={centerX + (radius + 20) * Math.cos(((index + 0.5) * 2 * Math.PI) / wheelData.length)}
                cy={centerY + (radius + 20) * Math.sin(((index + 0.5) * 2 * Math.PI) / wheelData.length)}
                r="10"
                fill="yellow"
                stroke="black"
                strokeWidth="2"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default Wheel;
