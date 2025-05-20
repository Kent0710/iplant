// src/context/coin-context.ts
import { createContextId } from '@builder.io/qwik';

export const CoinContext = createContextId<{ coin: number }>('global.coin.context');