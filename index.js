const Discord = require('discord.js');

const money = require('discord-money');    // Define client for Discord

const talkedRecently = new Set();

const { Client, MessageEmbed } = require('discord.js')

const prefix = `d!`

const client = new Discord.Client();

const usedCommandRecently = new Set();

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('15 more shit');
});
myEmitter.emit('event');


client.on("ready", () =>{
    console.log(`bot is fucking ready,dickhead`);
      client.user.setActivity('Type news' , { type : 'LISTENING'})   
      require('events').EventEmitter.setMaxListeners = 15;
    });


    client.on('message', message => {
      if(message.author.bot)return;
    
      if(message.channel.type === 'dm') {
          return;
      }
    
const memes = ['https://vignette.wikia.nocookie.net/dat-meme-wiki/images/1/1b/5cbf352666fba.jpeg/revision/latest?cb=20190424003333', 'https://memesexpert.com/wp-content/uploads/2020/04/dank-memes-1.png', 'https://i.pinimg.com/originals/38/81/5f/38815f4c1215691be9cfc06dc24b377d.png', 'https://i.chzbgr.com/full/9333991424/h0C52A158/and-the-alien-hits-you-with-the-460-glib-glop-interstellar-bozmogtrog-and-you-blow-an-entire-nut', 'https://img-9gag-fun.9cache.com/photo/a7w66mz_460s.jpg', 'https://i.pinimg.com/236x/a3/6f/d0/a36fd0a6136a152db3ab62192472aa78.jpg', 'https://img-9gag-fun.9cache.com/photo/abGOnnv_460s.jpg', 'https://i1.wp.com/livewire.thewire.in/wp-content/uploads/2018/04/DABeVz7UwAIwt8h.jpg?fit=1200%2C901&ssl=1', 'https://qph.fs.quoracdn.net/main-qimg-feaaef72223663c976fb08f7c9e2d9d1', 'https://i.pinimg.com/originals/f6/4f/62/f64f6217843a6fce52e281351e82187b.jpg', 'https://i.pinimg.com/originals/aa/60/a5/aa60a54bb14ef9a3b945b6bf30020c8e.jpg', 'https://imgix.ranker.com/user_node_img/964/19272391/original/dbz-battle-boardgame-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces', 'https://i.redd.it/8kt5cz8p1od11.jpg', 'https://cdn.ebaumsworld.com/mediaFiles/picture/2500783/85829940.jpg', 'https://pbs.twimg.com/media/EAJlGTaW4AA6Plq.jpg']                                                                                                                                                                                                                                                        
const chooser = memes[Math.floor(Math.random() * memes.length)];

      let args = message.content.substring(prefix.length).split("test");
    
    switch (args[0]) {
      case 'meme':
        if(usedCommandRecently.has(message.author.id)) {
          const embed = new MessageEmbed()
            .setTitle('Calm Down Man,wtf?')
            .setDescription('This command can execute every `3` Second ')  
          message.channel.send(embed)
        } else {
          money.fetchBal(message.author.id).then((i) => {  
          const embed = new MessageEmbed()
            .setTitle('Dank memes')
            .setFooter('discord.ly/dragon-moron')
            .setImage(`${chooser}`);
          message.channel.send(embed)
            })
    
          usedCommandRecently.add(message.author.id);
          setTimeout(() => {
            usedCommandRecently.delete(message.author.id)
          }, 3000)
        }
    
        break;
      default:
    
    }
    });

    client.on('message', message => {
      if(message.author.bot)return;
    
      if(message.channel.type === 'dm') {
          return;
      }
    
      let args = message.content.substring(prefix.length).split("test");
    
    switch (args[0]) {
      case 'avatar':
        if(usedCommandRecently.has(message.author.id)) {
          const embed = new MessageEmbed()
            .setTitle('Calm Down Man,wtf?')
            .setDescription('This command can execute every `5` Second ')  
          message.channel.send(embed)
        } else {
          money.fetchBal(message.author.id).then((i) => {  
          const embed = new MessageEmbed()
            .setTitle(`Command List`)
            .setImage(message.author.displayAvatarURL());
          message.channel.send(embed)
            })
    
          usedCommandRecently.add(message.author.id);
          setTimeout(() => {
            usedCommandRecently.delete(message.author.id)
          }, 0)
        }
    
        break;
      default:
    
    }
    });




client.on('message', message => {
  if(message.content === 'news'){
    message.channel.send('The bot will shut')
  }
});



client.on('message', message => {
  if(message.author.bot)return;

  if(message.channel.type === 'dm') {
      return;
  }

  let args = message.content.substring(prefix.length).split("test");

switch (args[0]) {
  case 'help currency':
    if(usedCommandRecently.has(message.author.id)) {
      const embed = new MessageEmbed()
        .setTitle('Calm Down Man,wtf?')
        .setDescription('This command can execute every `5` Second ')  
      message.channel.send(embed)
    } else {
      money.fetchBal(message.author.id).then((i) => {  
      const embed = new MessageEmbed()
        .setTitle(`Command List`)
        .addFields(
          { name: 'Beg', value: '`Give you a money from someone`', inline: true },
          { name: 'Balance', value: '`Show you money`', inline: true },
          { name: 'Daily', value: '`Give you money every 24h`', inline: true },
          { name: 'Weekly', value: '`Give you money every 1 week`', inline: true },
        );
      message.channel.send(embed)
        })

      usedCommandRecently.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently.delete(message.author.id)
      }, 0)
    }

    break;
  default:

}
});

client.on('message', message => {
  if(message.author.bot)return;

  if(message.channel.type === 'dm') {
      return;
  }

  let args = message.content.substring(prefix.length).split("test");

switch (args[0]) {
  case 'help fun':
    if(usedCommandRecently.has(message.author.id)) {
      const embed = new MessageEmbed()
        .setTitle('Calm Down Man,wtf?')
        .setDescription('This command can execute every `5` Second ')  
      message.channel.send(embed)
    } else {
      money.fetchBal(message.author.id).then((i) => {  
      const embed = new MessageEmbed()
        .setTitle(`Command List`)
        .addFields(
          { name: 'Roll dice', value: '`Roll a dice`', inline: true },
          { name: 'FlipCoin', value: '`Flip a coin, to make bet with your friend`', inline: true },
          { name: 'Meme', value: '`Random Meme generate`', inline: true },
          { name: 'Dead', value: '`Random Wasted anime gif`', inline: true },
        );
      message.channel.send(embed)
        })

      usedCommandRecently.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently.delete(message.author.id)
      }, 0)
    }

    break;
  default:

}
});

client.on('message', message => {
  if(message.author.bot)return;

  if(message.channel.type === 'dm') {
      return;
  }

  let args = message.content.substring(prefix.length).split("test");

switch (args[0]) {
  case 'help':
    if(usedCommandRecently.has(message.author.id)) {
      const embed = new MessageEmbed()
        .setTitle('Calm Down Man,wtf?')
        .setDescription('This command can execute every `5` Second ')  
      message.channel.send(embed)
    } else {
      money.fetchBal(message.author.id).then((i) => {  
      const embed = new MessageEmbed()
        .setTitle(`Command List`)
        .addFields(
          { name: '😝Help Fun', value: '`d!help fun`', inline: true },
          { name: '💰Help Currency', value: '`d!help currency`', inline: true },
          { name: '😅Help Meme', value: '`d!help meme`', inline: true },
        );
      message.channel.send(embed)
        })

      usedCommandRecently.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently.delete(message.author.id)
      }, 0)
    }

    break;
  default:

}
});

client.on('message', message => {
  if(message.author.bot)return;

  if(message.channel.type === 'dm') {
      return;
  }

  let args = message.content.substring(prefix.length).split("test");

switch (args[0]) {
  case 'help meme':
    if(usedCommandRecently.has(message.author.id)) {
      const embed = new MessageEmbed()
        .setTitle('Calm Down Man,wtf?')
        .setDescription('This command can execute every `5` Second ')  
      message.channel.send(embed)
    } else {
      money.fetchBal(message.author.id).then((i) => {  
      const embed = new MessageEmbed()
        .setTitle(`Command List`)
        .addFields(
          { name: 'Meme', value: '`Random Dank Memes`', inline: true },
        );
      message.channel.send(embed)
        })

      usedCommandRecently.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently.delete(message.author.id)
      }, 0)
    }

    break;
  default:

}
});


client.on('message', message => {
    if(message.author.bot)return;

    if(message.channel.type === 'dm') {
        return;
    }

    const people = ["Dank Memer", "Melmsie", "Michael Reeves", "Tiktok Thot", "Steve", "Dani", "Dream"]
const randomp = people[Math.floor(Math.random() * people.length)];

    let args = message.content.substring(prefix.length).split("test");

    switch (args[0]) {
      case 'beg':
        if(usedCommandRecently.has(message.author.id)) {
          const embed = new MessageEmbed()
            .setTitle('Cooldown')
            .setColor(0xff9800)
            .setDescription('The command is on cooldown try again in 10 second');
            message.channel.send(embed)
        } else {
          money.updateBal(message.author.id, 69 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
              message.channel.send(`**${randomp}** just gave you money`);
            })

          usedCommandRecently.add(message.author.id);
          setTimeout(() => {
            usedCommandRecently.delete(message.author.id)
          }, 10000)
        }

        break;
      default:

    }
});

client.on('message', message => {
    if(message.author.bot)return;
 
    if(message.channel.type === 'dm') {
        return;
    }

    let args = message.content.substring(prefix.length).split("test");

  switch (args[0]) {
    case 'balance':
      if(usedCommandRecently.has(message.author.id)) {
          message.channel.send(embed)
      } else {
        money.fetchBal(message.author.id).then((i) => {  
        const embed = new MessageEmbed()
          .setTitle(`${message.author.username}, Balance`)
          .setDescription(`**Wallet**: ${i.money}`);
        message.channel.send(embed)
          })

        usedCommandRecently.add(message.author.id);
        setTimeout(() => {
          usedCommandRecently.delete(message.author.id)
        }, 0)
      }

      break;
    default:

  }
});

client.on('message', message => {
    if(message.author.bot)return;
    
    if(message.channel.type === 'dm') {
        return;
    }
      let args = message.content.substring(prefix.length).split("test");
  
      switch (args[0]) {
        case 'daily':
          if(usedCommandRecently.has(message.author.id)) {
            const embed = new MessageEmbed()
              .setTitle('slowdown dude, wtf?')
              .setColor(0xff9800)
              .setDescription('you need to shut the fuck up and wait for 24 hours');
              message.channel.send(embed)
          } else {
            money.updateBal(message.author.id, 50000 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
            const embed = new MessageEmbed()
              .setTitle('Your Daily $50,000')
              .setDescription("We'll give you 50,000 money to your wallet wait `24 hour` for us to give you money again");
            message.channel.send(embed)
              })
  
            usedCommandRecently.add(message.author.id);
            setTimeout(() => {
              usedCommandRecently.delete(message.author.id)
            }, 86400000)
          }
  
          break;
        default:
  
      }
  });

  client.on('message', message => {
    if(message.author.bot)return;
    
    if(message.channel.type === 'dm') {
        return;
    }
      let args = message.content.substring(prefix.length).split("test");
  
      switch (args[0]) {
        case 'weekly':
          if(usedCommandRecently.has(message.author.id)) {
            const embed = new MessageEmbed()
              .setTitle('slowdown dude, wtf?')
              .setColor(0xff9800)
              .setDescription('you need to shut the fuck up and wait for 24 hours')
              .setDescription('i cant make you money so easily');
              message.channel.send(embed)
          } else {
            money.updateBal(message.author.id, 500000 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
            const embed = new MessageEmbed()
              .setTitle('Your weekly $500,000')
              .setDescription("We'll give you 500,000 money to your wallet wait `1 week` for us to give you money again");
            message.channel.send(embed)
              })
  
            usedCommandRecently.add(message.author.id);
            setTimeout(() => {
              usedCommandRecently.delete(message.author.id)
            }, 26280000)
          }
  
          break;
        default:
  
      }
  });

  client.on('message', message => {
    if(message.author.bot)return;
    
    if(message.channel.type === 'dm') {
        return;
    }
    
    const gif = ["https://media1.tenor.com/images/0bccc455e6793a4bfe0d1b27fef3e661/tenor.gif?itemid=17608658", "https://media1.tenor.com/images/d3f0893d296d19b1fb6201a30619206c/tenor.gif?itemid=7256224", "https://media1.tenor.com/images/ff2dcd44504000e320c21ae5682b5369/tenor.gif?itemid=5749160", "https://media1.tenor.com/images/08dbe414a744f9ce506ca7f33505d9fe/tenor.gif?itemid=17641117"]
    const rgif = gif[Math.floor(Math.random() * gif.length)];
    const target = message.mentions.users.first();
    
        let args = message.content.substring(prefix.length).split("test");
    
        switch (args[0]) {
          case `wasted` :
            if(usedCommandRecently.has(message.author.id)) {
              const embed = new MessageEmbed()
                .setTitle('Cooldown')
                .setColor(0xff9800)
                .setDescription('The command is on cooldown try again in 5 second');
                message.channel.send(embed)
            } else {
              const embed = new MessageEmbed()
                .setAuthor(`${message.author.username} wasted`, message.author.displayAvatarURL())
                .setImage(`${rgif}`);
              message.channel.send(embed)
              usedCommandRecently.add(message.author.id);
              setTimeout(() => {
                usedCommandRecently.delete(message.author.id)
              }, 5000)
            }
    
            break;
          default:
    
        }
    });

client.on('message', message => {
    if(message.author.bot)return;

    if(message.channel.type === 'dm') {
        return;
    }

const dice = ['1', '2', '3', '4', '5', '6']
const roll = dice[Math.floor(Math.random() * dice.length)];

    let args = message.content.substring(prefix.length).split("test");
    
    switch (args[0]) {
      case 'roll':
        if(usedCommandRecently.has(message.author.id)) {
          const embed = new MessageEmbed()
            .setTitle('Cooldown')
            .setColor(0xff9800)
            .setDescription('The command is on cooldown try again in 5 second');
            message.channel.send(embed)
        } else {
          const embed = new MessageEmbed()
            .setAuthor(`Rolling a dice`, `${message.author.displayAvatarURL()}`)
            .setDescription(`You got **${roll}**`);
          message.channel.send(embed)
          usedCommandRecently.add(message.author.id);
          setTimeout(() => {
            usedCommandRecently.delete(message.author.id)
          }, 5000)
        }

        break;
      default:

    }
});

client.on('message', message => {
    if(message.author.bot)return;

    if(message.channel.type === 'dm') {
        return;
    }

const coin = ['Tails', 'Head']
const flip = coin[Math.floor(Math.random() * coin.length)];
const flipcoinc = []

    let args = message.content.substring(prefix.length).split("test");
    
    switch (args[0]) {
      case 'flipcoin':
        if(usedCommandRecently.has(message.author.id)) {
          const embed = new MessageEmbed()
            .setTitle('Cooldown')
            .setColor(0xff9800)
            .setDescription('The command is on cooldown try again in 5 second');
            message.channel.send(embed)
        } else {
          const embed = new MessageEmbed()
            .setAuthor(`Fliping a coin`, `${message.author.displayAvatarURL()}`)
            .setDescription(`You got **${flip}**`)
            .setFooter(`not bad,for a newbie`);
          message.channel.send(embed)
          usedCommandRecently.add(message.author.id);
          setTimeout(() => {
            usedCommandRecently.delete(message.author.id)
          }, 5000)
        }

        break;
      default:

    }
});



client.login('NzgyNTY4ODk5MzYyNTUzODY2.X8OGFQ.R4nd8UmZKt5Li3EA8j0kesBVlL0')