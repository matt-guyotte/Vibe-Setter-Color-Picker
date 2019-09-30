$(document).ready(function() {

  // Teal Modal //

  $("#teal").click(function() {
    $("#bg-modal-teal").css({
      "display" : "flex",
    });
    playAudioTeal();
    $("#bg-modal-teal").animate ({
      opacity: 1.0,
    }, 6000, function() {
      $("#modal-contents-teal").animate({
        opacity: 1.0,
      }, 8000, function() {
      });
      $("#modal-pteal").animate ({
        opacity: 1.0,
      }, 3000, function() {
        $("#modal-pteal2").animate ({
          opacity: 1.0,
      },  3000, function() {
          $("#modal-pteal3").animate ({
            opacity: 1.0,
      },    3000, function() {
            $(".more-colors, #row-colors-teal,#modal-pteal4").animate ({
              opacity: 0.9,
      },      1500, function() {
       });
      });
    });
   });
  });
});

  $("#teal-modal, #teal-modal-2, #teal-modal-3, #teal-modal-4").click(function() {
    $("#blackSong, #bubblegumSong, #royalSong, #goldSong").trigger('pause');
    $("#bg-modal-black, #bg-modal-bubblegum, #bg-modal-royal, #bg-modal-gold").animate ({
      opacity: 0,
    }, 800, function() {
      $("#bg-modal-black, #bg-modal-bubblegum, #bg-modal-royal, #bg-modal-gold").css({
        "display" : "none",
      });
    });
    $("#bg-modal-teal").css({
      "display" : "flex",
    });
    playAudioTeal();
    $("#bg-modal-teal").animate ({
      opacity: 1.0,
    }, 6000, function() {
        $("#modal-contents-teal").animate({
          opacity: 1.0,
        }, 8000, function() {
      });
      $("#modal-pteal").animate ({
        opacity: 1.0,
      }, 3000, function() {
        $("#modal-pteal2").animate ({
          opacity: 1.0,
      },  3000, function() {
          $("#modal-pteal3").animate ({
            opacity: 1.0,
      },    3000, function() {
            $(".more-colors, #row-colors-teal,#modal-pteal4").animate ({
              opacity: 0.9,
      },    1500, function() {
        });
      });
    });
  });
});
});

  $("#close-teal").click(function() {
      xteal.pause();
      $("#modal-pteal3").animate ({
        opacity: 0.0,
      }, 100, function() {
        $("#modal-pteal2").animate ({
          opacity: 0.0,
        }, 100, function() {
          $("#modal-pteal").animate ({
            opacity: 0.0,
          }, 100, function() {
            $(".more-colors, #row-colors-teal,#modal-pteal4").animate ({
              opacity: 0.0,
           }, 1500, function() {
       });
      });
      });
      });
      $("#modal-contents-teal, #bg-modal-teal").animate({
        opacity: 0.2,
      }, 800, function() {
        $("#bg-modal-teal").css ({
          "display" : "none",
        });
      });
    });

  // Teal Play Song //
  var xteal = document.getElementById("tealSong");
  function playAudioTeal() {
    xteal.play();
      if (xteal.pause) {
          xteal.currentTime = 0
      }
    }


  // Sun Modal //

  $("#sun-yellow").click(function() {
      $("#bg-modal-sun").css({
        "display" : "flex",
      });
      playAudioSun();
      $("#bg-modal-sun").animate ({
        opacity: 1.0,
      }, 100, function() {
        $("#modal-contents-sun").animate({
          opacity: 1.0,
        }, 100, function() {
        });
      });
        $("#modal-psun").animate ({
          opacity: 1.0,
        }, 1000, function() {
          $("#modal-psun2").animate ({
            opacity: 1.0,
        },  1000, function() {
            $("#modal-psun3").animate ({
              opacity: 1.0,
        },    1000, function() {
              $(".more-colors, #row-colors-sun,#modal-psun4").animate ({
                opacity: 0.9,
        },      1500, function() {
          });
        });
      });
     });
    });

  $("#sun-modal, #sun-modal-2, #sun-modal-3, #sun-modal-4").click(function() {
      $("#tealSong, #bubblegumSong, #royalSong, #goldSong").trigger('pause');
      $("#bg-modal-teal, #bg-modal-bubblegum, #bg-modal-royal, #bg-modal-gold").animate ({
        opacity: 0,
      }, 100, function() {
        $("#bg-modal-teal, #bg-modal-bubblegum, #bg-modal-royal, #bg-modal-gold").css({
          "display" : "none",
        });
      });
      $("#bg-modal-sun").css({
        "display" : "flex",
      });
      playAudioSun();
      $("#bg-modal-sun").animate ({
        opacity: 1.0,
      }, 100, function() {
          $("#modal-contents-sun").animate({
            opacity: 1.0,
          }, 100, function() {
        });
      });
      $("#modal-psun").animate ({
        opacity: 1.0,
      }, 2000, function() {
        $("#modal-psun2").animate ({
          opacity: 1.0,
      },  5000, function() {
          $("#modal-psun3").animate ({
            opacity: 1.0,
      },    5000, function() {
            $(".more-colors, #row-colors-sun, #modal-psun4").animate ({
              opacity: 0.9,
      },      3500, function() {
       });
      });
    });
   });
  });

  $("#close-sun").click(function() {
      xsun.pause();
      $("#modal-psun3").animate ({
        opacity: 0.0,
      }, 100, function() {
        $("#modal-psun2").animate ({
          opacity: 0.0,
        }, 100, function() {
          $("#modal-psun").animate ({
            opacity: 0.0,
          }, 100, function() {
            $(".more-colors, #row-colors-sun,#modal-psun4").animate ({
              opacity: 0.0,
            },1500, function() {
        });
      });
      });
      });
      $("#modal-contents-sun, #bg-modal-sun").animate({
        opacity: 0.2,
      }, 800, function() {
        $("#bg-modal-sun").css ({
          "display" : "none",
        });
      });
    });

  // Sun Yellow Play Song //

  var xsun = document.getElementById("sunSong");
  function playAudioSun() {
      xsun.play();
        if (xsun.pause) {
            xsun.currentTime = 0
        }
      }


  // Blood Red Modal //

  $("#blood-red").click(function() {
      $("#bg-modal-blood").css({
        "display" : "flex",
      });
      playAudioBlood();
      $("#bg-modal-blood").animate ({
        opacity: 1.0,
      }, 50, function() {
        $("#modal-contents-blood").animate({
          opacity: 1.0,
        }, 100, function() {
        });
      });
      $("#modal-pblood").animate ({
        opacity: 1.0,
      }, 1000, function() {
        $("#modal-pblood2").animate ({
          opacity: 1.0,
        },1000, function() {
          $("#modal-pblood3").animate ({
            opacity: 1.0,
          },1000, function() {
            $(".more-colors, #row-colors-blood ,#modal-pblood4").animate ({
              opacity: 0.9,
            },1500, function() {
        });
      });
    });
   });
  });

  $("#blood-modal, #blood-modal-2, #blood-modal-3, #blood-modal-4").click(function() {
      $("#tealSong, #sunSong, #royalSong, #goldSong").trigger('pause');
      $("#bg-modal-teal, #bg-modal-sun, #bg-modal-royal, #bg-modal-gold").animate ({
        opacity: 0,
      }, 300, function() {
        $("#bg-modal-teal, #bg-modal-sun, #bg-modal-royal, #bg-modal-gold").css({
          "display" : "none",
        });
      });
      $("#bg-modal-blood").css({
        "display" : "flex",
      });
      playAudioBlood();
      $("#bg-modal-blood").animate ({
        opacity: 1.0,
      }, 500, function() {
          $("#modal-contents-blood").animate({
            opacity: 1.0,
          }, 100, function() {
        });
      });
      $("#modal-pblood").animate ({
        opacity: 1.0,
      }, 1000, function() {
        $("#modal-pblood2").animate ({
          opacity: 1.0,
      },  1000, function() {
          $("#modal-pblood3").animate ({
            opacity: 1.0,
      },    1000, function() {
            $(".more-colors, #row-colors-blood ,#modal-pblood4").animate ({
              opacity: 0.9,
          },  1500, function() {
        });
      });
    });
   });
});

  $("#close-blood").click(function() {
      xblood.pause();
      $("#modal-pblood3").animate ({
        opacity: 0.0,
      }, 100, function() {
        $("#modal-pblood2").animate ({
          opacity: 0.0,
        }, 100, function() {
          $("#modal-pblood").animate ({
            opacity: 0.0,
          }, 100, function() {
            $(".more-colors, #row-colors-blood, #modal-pblood4").animate ({
              opacity: 0.0,
          },  100, function() {
        });
      });
      });
      });
      $("#modal-contents-blood, #bg-modal-blood").animate({
        opacity: 0.2,
      }, 800, function() {
        $("#bg-modal-blood").css ({
          "display" : "none",
        });
      });
    });

  // Blood Red Play Song //

  var xblood = document.getElementById("bloodSong");
  function playAudioBlood() {
      xblood.play();
        if (xblood.pause) {
            xblood.currentTime = 0
        }
      }


  // Tree Brown Modal //

  $("#tree-brown").click(function() {
        $("#bg-modal-tree").css({
          "display" : "flex",
        });
        playAudioTree();
        $("#bg-modal-tree").animate ({
          opacity: 1.0,
        }, 1500, function() {
          $("#modal-contents-tree").animate({
            opacity: 1.0,
          }, 3000, function() {
          });
        });
        $("#modal-ptree").animate ({
          opacity: 1.0,
        }, 3000, function() {
          $("#modal-ptree2").animate ({
            opacity: 1.0,
        },  3000, function() {
            $("#modal-ptree3").animate ({
              opacity: 1.0,
        },    3000, function() {
              $(".more-colors, #row-colors-tree ,#modal-ptree4").animate ({
                opacity: 0.9,
            },  1500, function() {
          });
        });
      });
     });
    });

  $("#tree-modal, #tree-modal-2, #tree-modal-3, #tree-modal-4").click(function() {
        $("#tealSong, #sunSong, #bloodSong, #goldSong").trigger('pause');
        $("#bg-modal-teal, #bg-modal-sun, #bg-modal-blood, #bg-modal-gold").animate ({
          opacity: 0,
        }, 800, function() {
          $("#bg-modal-teal, #bg-modal-sun, #bg-modal-blood, #bg-modal-gold").css({
            "display" : "none",
          });
        });
        $("#bg-modal-tree").css({
          "display" : "flex",
        });
        playAudioTree();
        $("#bg-modal-tree").animate ({
          opacity: 1.0,
        }, 1500, function() {
            $("#modal-contents-tree").animate({
              opacity: 1.0,
            }, 3000, function() {
          });
        });
        $("#modal-ptree").animate ({
          opacity: 1.0,
        }, 3000, function() {
          $("#modal-ptree2").animate ({
            opacity: 1.0,
        },  3000, function() {
            $("#modal-ptree3").animate ({
              opacity: 1.0,
        },    3000, function() {
              $(".more-colors, #row-colors-tree ,#modal-ptree4").animate ({
                opacity: 0.9,
              },  1500, function() {
          });
        });
      });
     });
   });

  $("#close-tree").click(function() {
      xtree.pause();
      $("#modal-ptree3").animate ({
        opacity: 0.0,
      }, 100, function() {
        $("#modal-ptree2").animate ({
          opacity: 0.0,
        }, 100, function() {
          $("#modal-ptree").animate ({
            opacity: 0.0,
          }, 100, function() {
            $(".more-colors, #row-colors-tree ,#modal-ptree4").animate ({
              opacity: 0.0,
          },  100, function() {
        });
      });
      });
      });
      $("#modal-contents-tree, #bg-modal-tree").animate({
        opacity: 0.2,
      }, 800, function() {
        $("#bg-modal-tree").css ({
          "display" : "none",
        });
      });
    });

  // Tree Brown Play Song //

  var xtree = document.getElementById("treeSong");
  function playAudioTree() {
        xtree.play();
          if (xtree.pause) {
              xtree.currentTime = 0
          }
        }


  // Black Modal //

  $("#black").click(function() {
        $("#bg-modal-black").css({
          "display" : "flex",
        });
        playAudioBlack();
        $("#bg-modal-black").animate ({
          opacity: 1.0,
        }, 1500, function() {
          $("#modal-contents-black").animate({
            opacity: 1.0,
          }, 3000, function() {
          });
        });
        $("#modal-pblack").animate ({
          opacity: 1.0,
        }, 3000, function() {
          $("#modal-pblack2").animate ({
            opacity: 1.0,
        },  3000, function() {
            $("#modal-pblack3").animate ({
              opacity: 1.0,
        },    3000, function() {
              $(".more-colors, #row-colors-black ,#modal-pblack4").animate ({
                opacity: 0.9,
            },  1500, function() {
          });
        });
      });
     });
    });

    $("#black-modal, #black-modal-2, #black-modal-3, #black-modal-4").click(function() {
      $("#tealSong, #sunSong, #bloodSong, #treeSong").trigger('pause');
      $("#bg-modal-teal, #bg-modal-sun, #bg-modal-blood, #bg-modal-tree").animate ({
        opacity: 0,
      }, 800, function() {
        $("#bg-modal-teal, #bg-modal-sun, #bg-modal-blood, #bg-modal-tree").css({
          "display" : "none",
        });
      });
      $("#bg-modal-black").css({
        "display" : "flex",
      });
      playAudioBlack();
      $("#bg-modal-black").animate ({
        opacity: 1.0,
      }, 1500, function() {
          $("#modal-contents-black").animate({
            opacity: 1.0,
          }, 3000, function() {
        });
      });
      $("#modal-pblack").animate ({
        opacity: 1.0,
      }, 3000, function() {
        $("#modal-pblack2").animate ({
          opacity: 1.0,
      },  3000, function() {
          $("#modal-pblack3").animate ({
            opacity: 1.0,
      },    3000, function() {
            $(".more-colors, #row-colors-black, #modal-pblack4").animate ({
              opacity: 0.9,
            },  1500, function() {
        });
      });
    });
   });
 });

  $("#close-black").click(function() {
      xblack.pause();
      $("#modal-pblack3").animate ({
        opacity: 0.0,
      }, 100, function() {
        $("#modal-pblack2").animate ({
          opacity: 0.0,
        }, 100, function() {
          $("#modal-pblack").animate ({
            opacity: 0.0,
          }, 100, function() {
            $(".more-colors, #row-colors-black ,#modal-pblack4").animate ({
              opacity: 0.0,
          },  1500, function() {
        });
      });
      });
      });
      $("#modal-contents-black, #bg-modal-black").animate({
        opacity: 0.2,
      }, 800, function() {
        $("#bg-modal-black").css ({
          "display" : "none",
        });
      });
    });

  // Black Play Song //

  var xblack = document.getElementById("blackSong");
  function playAudioBlack() {
        xblack.play();
          if (xblack.pause) {
              xblack.currentTime = 0
          }
        }


  // Bubblegum Pink Modal //

  $("#bubblegum-pink").click(function() {
    $("#bg-modal-bubblegum").css({
      "display" : "flex",
    });
    PlayAudioBubblegum();
    $("#bg-modal-bubblegum").animate ({
      opacity: 1.0,
    }, 1500, function() {
      $("#modal-contents-bubblegum").animate({
        opacity: 1.0,
      }, 3000, function() {
      });
    });
    $("#modal-pbubblegum").animate ({
      opacity: 1.0,
    }, 3000, function() {
      $("#modal-pbubblegum2").animate ({
        opacity: 1.0,
    },  3000, function() {
        $("#modal-pbubblegum3").animate ({
          opacity: 1.0,
    },    3000, function() {
          $(".more-colors, #row-colors-bubblegum, #modal-pbubblegum4").animate ({
            opacity: 0.9,
          },  1500, function() {
      });
    });
  });
  });
  });

  $("#bubblegum-modal, #bubblegum-modal-2, #bubblegum-modal-3, #bubblegum-modal-4").click(function() {
    $("#sunSong, #bloodSong, #treeSong, #blackSong").trigger('pause');
    $("#bg-modal-sun, #bg-modal-blood, #bg-modal-tree, #bg-modal-black").animate ({
      opacity: 0,
    }, 800, function() {
      $("#bg-modal-sun, #bg-modal-blood, #bg-modal-tree, #bg-modal-black").css({
        "display" : "none",
      });
    });
    $("#bg-modal-bubblegum").css({
      "display" : "flex",
    });
    PlayAudioBubblegum();
    $("#bg-modal-bubblegum").animate ({
      opacity: 1.0,
    }, 1500, function() {
        $("#modal-contents-bubblegum").animate({
          opacity: 1.0,
        }, 3000, function() {
      });
    });
    $("#modal-pbubblegum").animate ({
      opacity: 1.0,
    }, 3000, function() {
      $("#modal-pbubblegum2").animate ({
        opacity: 1.0,
    },  3000, function() {
        $("#modal-pbubblegum3").animate ({
          opacity: 1.0,
    },    3000, function() {
          $(".more-colors, #row-colors-bubblegum, #modal-pbubblegum4").animate ({
            opacity: 0.9,
          },  1500, function() {
      });
    });
  });
  });
  });

  $("#close-bubblegum").click(function() {
    xbubblegum.pause();
    $("#modal-pbubblegum3").animate ({
      opacity: 0.0,
    }, 100, function() {
      $("#modal-pbubblegum2").animate ({
        opacity: 0.0,
      }, 100, function() {
        $("#modal-pbubblegum").animate ({
          opacity: 0.0,
        }, 100, function() {
          $(".more-colors, #row-colors-bubblegum, #modal-pbubblegum4").animate ({
            opacity: 0.0,
          },  100, function() {
      });
    });
    });
    });
    $("#modal-contents-bubblegum, #bg-modal-bubblegum").animate({
      opacity: 0.2,
    }, 800, function() {
      $("#bg-modal-bubblegum").css ({
        "display" : "none",
      });
    });
  });

  // Bubblegum Pink Play Song //

  var xbubblegum = document.getElementById("bubblegumSong");
  function PlayAudioBubblegum() {
   xbubblegum.play();
     if (xbubblegum.pause) {
         xbubblegum.currentTime = 0
     }
   }


  // Royal Purple Modal //

  $("#royal-purple").click(function() {
    $("#bg-modal-royal").css({
      "display" : "flex",
    });
    playAudioRoyal();
    $("#bg-modal-royal").animate ({
      opacity: 1.0,
    }, 1500, function() {
      $("#modal-contents-royal").animate({
        opacity: 1.0,
      }, 3000, function() {
      });
    });
    $("#modal-proyal").animate ({
      opacity: 1.0,
    }, 3000, function() {
      $("#modal-proyal2").animate ({
        opacity: 1.0,
    },  3000, function() {
        $("#modal-proyal3").animate ({
          opacity: 1.0,
    },    3000, function() {
        $(".more-colors, #row-colors-royal, #modal-proyal4").animate ({
          opacity: 0.9,
        },  1500, function() {
      });
    });
  });
  });
  });

  $("#royal-modal, #royal-modal-2, #royal-modal-3, #royal-modal-4").click(function() {
    $("#bloodSong, #treeSong, #blackSong, #bubblegumSong").trigger('pause');
    $("#bg-modal-blood, #bg-modal-tree, #bg-modal-black, #bg-modal-bubblegum").animate ({
      opacity: 0,
    }, 800, function() {
      $("#bg-modal-blood, #bg-modal-tree, #bg-modal-black, #bg-modal-bubblegum").css({
        "display" : "none",
      });
    });
    $("#bg-modal-royal").css({
      "display" : "flex",
    });
    playAudioRoyal();
    $("#bg-modal-royal").animate ({
      opacity: 1.0,
    }, 3000, function() {
      $("#modal-contents-royal").animate({
        opacity: 1.0,
      }, 6000, function() {
      });
    });
    $("#modal-proyal").animate ({
      opacity: 1.0,
    }, 3000, function() {
      $("#modal-proyal2").animate ({
        opacity: 1.0,
    },  3000, function() {
        $("#modal-proyal3").animate ({
          opacity: 1.0,
    },    3000, function() {
        $(".more-colors, #row-colors-royal, #modal-proyal4").animate ({
          opacity: 0.9,
        },  1500, function() {
      });
    });
  });
  });
  });

  $("#close-royal").click(function() {
    xroyal.pause();
    $("#modal-pbubblegum3").animate ({
      opacity: 0.0,
    }, 100, function() {
      $("#modal-pbubblegum2").animate ({
        opacity: 0.0,
      }, 100, function() {
        $("#modal-pbubblegum").animate ({
          opacity: 0.0,
        }, 100, function() {
          $(".more-colors, #row-colors-royal, #modal-proyal4").animate ({
            opacity: 0.0,
        },  100, function() {
      });
    });
    });
    });
    $("#modal-contents-royal, #bg-modal-royal").animate({
      opacity: 0.2,
    }, 800, function() {
      $("#bg-modal-royal").css ({
        "display" : "none",
      });
    });
  });

  // Royal Purple Play Song //

  var xroyal = document.getElementById("royalSong");
  function playAudioRoyal() {
    xroyal.play();
      if (xroyal.pause) {
          xroyal.currentTime = 0
      }
    }

  // Gold Modal //

  $("#gold").click(function() {
    $("#bg-modal-gold").css({
      "display" : "flex",
    });
    playAudioGold();
    $("#bg-modal-gold").animate ({
      opacity: 1.0,
    }, 50, function() {
      $("#modal-contents-gold").animate({
        opacity: 1.0,
      }, 100, function() {
      });
    });
    $("#modal-pgold").animate ({
      opacity: 1.0,
    }, 1200, function() {
      $("#modal-pgold2").animate ({
        opacity: 1.0,
    },  1200, function() {
        $("#modal-pgold3").animate ({
          opacity: 1.0,
    },    1200, function() {
          $(".more-colors, #row-colors-gold, #modal-pgold4").animate ({
            opacity: 0.9,
        },  1500, function() {
      });
    });
  });
  });
  });

  $("#gold-modal, #gold-modal-2, #gold-modal-3, #gold-modal-4").click(function() {
    $("#treeSong, #blackSong, #bubblegumSong, #royalSong").trigger('pause');
    $("#bg-modal-tree, #bg-modal-black, #bg-modal-bubblegum, #bg-modal-royal").animate ({
      opacity: 0,
    }, 50, function() {
      $("#bg-modal-tree, #bg-modal-black, #bg-modal-bubblegum, #bg-modal-royal").css({
        "display" : "none",
      });
    });
    $("#bg-modal-gold").css({
      "display" : "flex",
    });
    playAudioGold();
    $("#bg-modal-gold").animate ({
      opacity: 1.0,
    }, 50, function() {
        $("#modal-contents-gold").animate({
          opacity: 1.0,
        }, 100, function() {
      });
    });
    $("#modal-pgold").animate ({
      opacity: 1.0,
    }, 1200, function() {
      $("#modal-pgold2").animate ({
        opacity: 1.0,
    },  1200, function() {
        $("#modal-pgold3").animate ({
          opacity: 1.0,
    },    1200, function() {
          $(".more-colors, #row-colors-gold, #modal-pgold4").animate ({
            opacity: 0.9,
        },  1500, function() {
      });
    });
  });
  });
  });

  $("#close-gold").click(function() {
    xgold.pause();
    $("#modal-pgold3").animate ({
      opacity: 0.0,
    }, 100, function() {
      $("#modal-pgold2").animate ({
        opacity: 0.0,
      }, 100, function() {
        $("#modal-pgold").animate ({
          opacity: 0.0,
        }, 100, function() {
          $(".more-colors, #row-colors-gold, #modal-pgold4").animate ({
            opacity: 0.0,
        },  100, function() {
      });
    });
    });
    });
    $("#modal-contents-gold, #bg-modal-gold").animate({
      opacity: 0.2,
    }, 800, function() {
      $("#bg-modal-gold").css ({
        "display" : "none",
      });
    });
  });

  // Gold Play Song //

  var xgold = document.getElementById("goldSong");
  function playAudioGold() {
    xgold.play();
      if (xgold.pause) {
          xgold.currentTime = 0
      }
    }


});
