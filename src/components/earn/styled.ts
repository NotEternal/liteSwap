import styled from 'styled-components';
import { AutoColumn } from '../Column';

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  width: fit-content;
  justify-self: flex-end;
`;

export const DataCard = styled(AutoColumn)<{ disabled?: boolean }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.text1};
`;

export const CardNoise = styled.span`
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`;

export const CardSection = styled(AutoColumn)<{ disabled?: boolean }>`
  padding: 1rem;
  z-index: 1;
  opacity: ${({ disabled }) => disabled && '0.4'};
`;

export const Break = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`;
