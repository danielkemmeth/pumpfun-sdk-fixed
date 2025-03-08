export type PumpFun = {
  address: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
  metadata: {
    name: "pump";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor"; // Added description
  };
  instructions: [
    {
      name: "initialize";
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
      docs: ["Creates the global state."];
      accounts: [
        {
          name: "global";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [103, 108, 111, 98, 97, 108]; // "global"
              }
            ];
          };
        },
        {
          name: "user";
          writable: true;
          signer: true;
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [];
    },
    {
      name: "set_params"; // Renamed from setParams
      discriminator: [27, 234, 178, 52, 147, 2, 187, 141]; // Updated discriminator
      docs: ["Sets the global state parameters."];
      accounts: [
        {
          name: "global";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [103, 108, 111, 98, 97, 108]; // "global"
              }
            ];
          };
        },
        {
          name: "user";
          writable: true;
          signer: true;
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "event_authority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [95, 95, 101, 118, 101, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121]; // "__event_authority"
              }
            ];
          };
        },
        {
          name: "program";
          address: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
        }
      ];
      args: [
        {
          name: "fee_recipient"; // snake_case
          type: "pubkey";
        },
        {
          name: "initial_virtual_token_reserves"; // snake_case
          type: "u64";
        },
        {
          name: "initial_virtual_sol_reserves"; // snake_case
          type: "u64";
        },
        {
          name: "initial_real_token_reserves"; // snake_case
          type: "u64";
        },
        {
          name: "token_total_supply"; // snake_case
          type: "u64";
        },
        {
          name: "fee_basis_points"; // snake_case
          type: "u64";
        },
        {
          name: "withdraw_authority"; // Added new argument
          type: "pubkey";
        }
      ];
    },
    {
      name: "create";
      discriminator: [24, 30, 200, 40, 5, 28, 7, 119];
      docs: ["Creates a new coin and bonding curve."];
      accounts: [
        {
          name: "mint";
          writable: true;
          signer: true;
        },
        {
          name: "mint_authority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 105, 110, 116, 45, 97, 117, 116, 104, 111, 114, 105, 116, 121]; // "mint-authority"
              }
            ];
          };
        },
        {
          name: "bonding_curve"; // snake_case
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [98, 111, 110, 100, 105, 110, 103, 45, 99, 117, 114, 118, 101]; // "bonding-curve"
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
          };
        },
        {
          name: "associated_bonding_curve"; // snake_case
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "bonding_curve";
              },
              {
                kind: "const";
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121,
                  172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255,
                  0, 169
                ]; // Associated token program constant
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
            program: {
              kind: "const";
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142, 13, 131,
                11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216, 219, 233, 248, 89
              ]; // "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            };
          };
        },
        {
          name: "global";
          writable: false;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [103, 108, 111, 98, 97, 108]; // "global"
              }
            ];
          };
        },
        {
          name: "mpl_token_metadata"; // snake_case
          address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
        },
        {
          name: "metadata";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 101, 116, 97, 100, 97, 116, 97]; // "metadata"
              },
              {
                kind: "const";
                value: [
                  11, 112, 101, 177, 227, 209, 124, 69, 56, 157, 82, 127, 107, 4, 195,
                  205, 88, 184, 108, 115, 26, 160, 253, 181, 73, 182, 209, 188, 3, 248,
                  41, 70
                ]; // "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
            program: {
              kind: "const";
              value: [
                11, 112, 101, 177, 227, 209, 124, 69, 56, 157, 82, 127, 107, 4, 195,
                205, 88, 184, 108, 115, 26, 160, 253, 181, 73, 182, 209, 188, 3, 248,
                41, 70
              ]; // "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
            };
          };
        },
        {
          name: "user";
          writable: true; // Changed from isMut to writable for consistency
          signer: true;
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "token_program"; // snake_case
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
        {
          name: "associated_token_program"; // snake_case
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "rent";
          address: "SysvarRent111111111111111111111111111111111";
        },
        {
          name: "event_authority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [95, 95, 101, 118, 101, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121]; // "__event_authority"
              }
            ];
          };
        },
        {
          name: "program";
          address: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "symbol";
          type: "string";
        },
        {
          name: "uri";
          type: "string";
        },
        {
          name: "creator"; // Added new argument
          type: "pubkey";
        }
      ];
    },
    {
      name: "buy";
      discriminator: [102, 6, 61, 18, 1, 218, 235, 234];
      docs: ["Buys tokens from a bonding curve."];
      accounts: [
        {
          name: "global";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [103, 108, 111, 98, 97, 108]; // "global"
              }
            ];
          };
        },
        {
          name: "fee_recipient"; // snake_case
          writable: true;
          signer: false;
        },
        {
          name: "mint";
          writable: false;
          signer: false;
        },
        {
          name: "bonding_curve"; // snake_case
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [98, 111, 110, 100, 105, 110, 103, 45, 99, 117, 114, 118, 101]; // "bonding-curve"
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
          };
        },
        {
          name: "associated_bonding_curve"; // snake_case
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "bonding_curve";
              },
              {
                kind: "const";
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121,
                  172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255,
                  0, 169
                ]; // Associated token program constant
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
            program: {
              kind: "const";
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142, 13, 131,
                11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216, 219, 233, 248, 89
              ]; // "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            };
          };
        },
        {
          name: "associated_user"; // snake_case
          writable: true;
          signer: false;
        },
        {
          name: "user";
          writable: true;
          signer: true;
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "token_program"; // snake_case
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
        {
          name: "rent";
          address: "SysvarRent111111111111111111111111111111111";
        },
        {
          name: "event_authority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [95, 95, 101, 118, 101, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121]; // "__event_authority"
              }
            ];
          };
        },
        {
          name: "program";
          address: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "max_sol_cost"; // snake_case
          type: "u64";
        }
      ];
    },
    {
      name: "sell";
      discriminator: [51, 230, 133, 164, 1, 127, 131, 173];
      docs: ["Sells tokens into a bonding curve."];
      accounts: [
        {
          name: "global";
          writable: false;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [103, 108, 111, 98, 97, 108]; // "global"
              }
            ];
          };
        },
        {
          name: "fee_recipient"; // snake_case
          writable: true;
          signer: false;
        },
        {
          name: "mint";
          writable: false;
          signer: false;
        },
        {
          name: "bonding_curve"; // snake_case
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [98, 111, 110, 100, 105, 110, 103, 45, 99, 117, 114, 118, 101]; // "bonding-curve"
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
          };
        },
        {
          name: "associated_bonding_curve"; // snake_case
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "bonding_curve";
              },
              {
                kind: "const";
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121,
                  172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255,
                  0, 169
                ]; // Associated token program constant
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
            program: {
              kind: "const";
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142, 13, 131,
                11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216, 219, 233, 248, 89
              ]; // "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            };
          };
        },
        {
          name: "associated_user"; // snake_case
          writable: true;
          signer: false;
        },
        {
          name: "user";
          writable: true;
          signer: true;
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "associated_token_program"; // snake_case
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "token_program"; // snake_case
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
        {
          name: "event_authority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [95, 95, 101, 118, 101, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121]; // "__event_authority"
              }
            ];
          };
        },
        {
          name: "program";
          address: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "min_sol_output"; // snake_case
          type: "u64";
        }
      ];
    },
    {
      name: "withdraw";
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34];
      docs: ["Allows the admin to withdraw liquidity for a migration once the bonding curve completes"];
      accounts: [
        {
          name: "global";
          writable: false;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [103, 108, 111, 98, 97, 108]; // "global"
              }
            ];
          };
        },
        {
          name: "last_withdraw"; // Renamed to snake_case
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [108, 97, 115, 116, 45, 119, 105, 116, 104, 100, 114, 97, 119]; // "last-withdraw"
              }
            ];
          };
        },
        {
          name: "mint";
          writable: false;
          signer: false;
        },
        {
          name: "bonding_curve"; // snake_case
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [98, 111, 110, 100, 105, 110, 103, 45, 99, 117, 114, 118, 101]; // "bonding-curve"
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
          };
        },
        {
          name: "associated_bonding_curve"; // snake_case
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "bonding_curve";
              },
              {
                kind: "const";
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121,
                  172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255,
                  0, 169
                ]; // Associated token program constant
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
            program: {
              kind: "const";
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142, 13, 131,
                11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216, 219, 233, 248, 89
              ]; // "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            };
          };
        },
        {
          name: "associated_user"; // snake_case
          writable: true;
          signer: false;
        },
        {
          name: "user";
          writable: true;
          signer: true;
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "token_program"; // snake_case
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
        {
          name: "rent";
          address: "SysvarRent111111111111111111111111111111111";
        },
        {
          name: "event_authority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [95, 95, 101, 118, 101, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121]; // "__event_authority"
              }
            ];
          };
        },
        {
          name: "program";
          address: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "BondingCurve"; // PascalCase for consistency
      discriminator: [23, 183, 248, 55, 96, 216, 172, 96];
    },
    {
      name: "Global"; // PascalCase for consistency
      discriminator: [167, 232, 232, 177, 200, 108, 114, 127];
    },
    {
      name: "LastWithdraw"; // Added, PascalCase for consistency
      discriminator: [203, 18, 220, 103, 120, 145, 187, 2];
    }
  ];
  events: [
    {
      name: "CreateEvent"; // PascalCase for consistency
      discriminator: [27, 114, 169, 77, 222, 235, 99, 118];
    },
    {
      name: "TradeEvent"; // PascalCase for consistency
      discriminator: [189, 219, 127, 211, 78, 230, 97, 238];
    },
    {
      name: "CompleteEvent"; // PascalCase for consistency
      discriminator: [95, 114, 97, 156, 212, 46, 152, 8];
    },
    {
      name: "SetParamsEvent"; // PascalCase for consistency
      discriminator: [223, 195, 159, 246, 62, 48, 143, 131];
    }
  ];
  types: [
    {
      name: "Global"; // PascalCase for consistency
      type: {
        kind: "struct";
        fields: [
          {
            name: "initialized";
            type: "bool";
          },
          {
            name: "authority";
            type: "pubkey";
          },
          {
            name: "fee_recipient"; // snake_case
            type: "pubkey";
          },
          {
            name: "initial_virtual_token_reserves"; // snake_case
            type: "u64";
          },
          {
            name: "initial_virtual_sol_reserves"; // snake_case
            type: "u64";
          },
          {
            name: "initial_real_token_reserves"; // snake_case
            type: "u64";
          },
          {
            name: "token_total_supply"; // snake_case
            type: "u64";
          },
          {
            name: "fee_basis_points"; // snake_case
            type: "u64";
          }
        ];
      };
    },
    {
      name: "LastWithdraw"; // PascalCase for consistency
      type: {
        kind: "struct";
        fields: [
          {
            name: "last_withdraw_timestamp"; // snake_case
            type: "i64";
          }
        ];
      };
    },
    {
      name: "BondingCurve"; // PascalCase for consistency
      type: {
        kind: "struct";
        fields: [
          {
            name: "virtual_token_reserves"; // snake_case
            type: "u64";
          },
          {
            name: "virtual_sol_reserves"; // snake_case
            type: "u64";
          },
          {
            name: "real_token_reserves"; // snake_case
            type: "u64";
          },
          {
            name: "real_sol_reserves"; // snake_case
            type: "u64";
          },
          {
            name: "token_total_supply"; // snake_case
            type: "u64";
          },
          {
            name: "complete";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "CreateEvent"; // PascalCase for consistency
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
            index: false;
          },
          {
            name: "symbol";
            type: "string";
            index: false;
          },
          {
            name: "uri";
            type: "string";
            index: false;
          },
          {
            name: "mint";
            type: "pubkey";
            index: false;
          },
          {
            name: "bonding_curve"; // snake_case
            type: "pubkey";
            index: false;
          },
          {
            name: "user";
            type: "pubkey";
            index: false;
          }
        ];
      };
    },
    {
      name: "TradeEvent"; // PascalCase for consistency
      type: {
        kind: "struct";
        fields: [
          {
            name: "mint";
            type: "pubkey";
            index: false;
          },
          {
            name: "sol_amount"; // snake_case
            type: "u64";
            index: false;
          },
          {
            name: "token_amount"; // snake_case
            type: "u64";
            index: false;
          },
          {
            name: "is_buy"; // snake_case
            type: "bool";
            index: false;
          },
          {
            name: "user";
            type: "pubkey";
            index: false;
          },
          {
            name: "timestamp";
            type: "i64";
            index: false;
          },
          {
            name: "virtual_sol_reserves"; // snake_case
            type: "u64";
            index: false;
          },
          {
            name: "virtual_token_reserves"; // snake_case
            type: "u64";
            index: false;
          },
          {
            name: "real_sol_reserves"; // snake_case
            type: "u64";
            index: false;
          },
          {
            name: "real_token_reserves"; // snake_case
            type: "u64";
            index: false;
          }
        ];
      };
    },
    {
      name: "CompleteEvent"; // PascalCase for consistency
      type: {
        kind: "struct";
        fields: [
          {
            name: "user";
            type: "pubkey";
            index: false;
          },
          {
            name: "mint";
            type: "pubkey";
            index: false;
          },
          {
            name: "bonding_curve"; // snake_case
            type: "pubkey";
            index: false;
          },
          {
            name: "timestamp";
            type: "i64";
            index: false;
          }
        ];
      };
    },
    {
      name: "SetParamsEvent"; // PascalCase for consistency
      type: {
        kind: "struct";
        fields: [
          {
            name: "fee_recipient"; // snake_case
            type: "pubkey";
            index: false;
          },
          {
            name: "initial_virtual_token_reserves"; // snake_case
            type: "u64";
            index: false;
          },
          {
            name: "initial_virtual_sol_reserves"; // snake_case
            type: "u64";
            index: false;
          },
          {
            name: "initial_real_token_reserves"; // snake_case
            type: "u64";
            index: false;
          },
          {
            name: "token_total_supply"; // snake_case
            type: "u64";
            index: false;
          },
          {
            name: "fee_basis_points"; // snake_case
            type: "u64";
            index: false;
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "NotAuthorized";
      msg: "The given account is not authorized to execute this instruction.";
    },
    {
      code: 6001;
      name: "AlreadyInitialized";
      msg: "The program is already initialized.";
    },
    {
      code: 6002;
      name: "TooMuchSolRequired";
      msg: "slippage: Too much SOL required to buy the given amount of tokens.";
    },
    {
      code: 6003;
      name: "TooLittleSolReceived";
      msg: "slippage: Too little SOL received to sell the given amount of tokens.";
    },
    {
      code: 6004;
      name: "MintDoesNotMatchBondingCurve";
      msg: "The mint does not match the bonding curve.";
    },
    {
      code: 6005;
      name: "BondingCurveComplete";
      msg: "The bonding curve has completed and liquidity migrated to raydium.";
    },
    {
      code: 6006;
      name: "BondingCurveNotComplete";
      msg: "The bonding curve has not completed.";
    },
    {
      code: 6007;
      name: "NotInitialized";
      msg: "The program is not initialized.";
    },
    {
      code: 6008;
      name: "WithdrawTooFrequent";
      msg: "Withdraw too frequent";
    }
  ];
};